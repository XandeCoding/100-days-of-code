defmodule List_funcs do
  def map([], _func), do: []
  def map([ head | tail ], func), do: [ func.(head) | map(tail, func) ]

  def reduce([], value, _) do
    value
  end
  def reduce([ head | tail ], value, func) do
    reduce(tail, func.(head, value), func)
  end

  def mapsum(list, function) do
    reduce(map(list, function), 0, &(&1 + &2))
  end

  def newMax([ head | tail]), do: auxMax(tail, head)

  def auxMax([], value), do: value
  def auxMax([ head | tail ], value) when head > value do
     auxMax(tail, head)
  end
  def auxMax([ _ | tail ], value) do
    auxMax(tail, value)
  end
end
