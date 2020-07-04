defmodule PlugTestTest do
  use ExUnit.Case
  doctest PlugTest

  test "greets the world" do
    assert PlugTest.hello() == :world
  end
end
