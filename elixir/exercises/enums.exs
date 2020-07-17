defmodule NewEnums do
  def all([ head | tail ], func) when func.(head) do
    all(tail, func)
  end
  def all(_, _), do: false
end
