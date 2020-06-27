defmodule Sequence.Server do
  use GenServer

  ###
  # External API

  def start_link(current_number) do
    GenServer.start_link(__MODULE__, current_number, name: __MODULE__)
  end

  def next_number do
    GenServer.call(__MODULE__, :next_number)
  end

  def increment_number(delta) do
    GenServer.cast(__MODULE__, { :increment_number, delta })
  end


  ###
  # GenServer Implementation
  def init(initial_number) do
    { :ok, initial_number }
  end

  def handle_call(:next_number, _from, current_number) do
    { :reply, current_number, current_number + 1 }
  end

  def handle_call(:pop, _from, current_state) do
    [ head | tail ] = current_state
    { :reply, head, tail }
  end

  def handle_cast({ :increment_number, delta }, current_number) do
    { :noreply, current_number + delta }
  end

  def handle_cast({ :push, value }, current_state) do
    { :noreply, [value | current_state ]}
  end
end