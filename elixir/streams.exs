[1, 2, 3, 4]
|> Stream.map(&(&1 * &1))
|> Stream.filter(fn x -> rem(x,2) == 1 end)
|> Enum.to_list
|> IO.inspect

# IO.puts File.open!("words")
#         |> IO.stream(:line)
#         |> Enum.max_by(&String.lenght/1)

Enum.into 1..5, []
|> IO.inspect

Stream.map(1.. 10_000_000, &(&1 + 1))
|> Enum.take(50)
|> IO.inspect

Stream.cycle(~w{ green white })
|> Stream.zip(1..5)
|> Enum.map(fn { class, value } ->
  "<tr class='#{ class }'><td>#{ value }</td>/tr>\n"
end)
|> IO.puts

Stream.repeatedly(&:random.uniform/0)
|> Enum.take(3)
|> IO.inspect

Stream.iterate(2, &(&1 * &1))
|> Enum.take(5)
|> IO.inspect

Stream.unfold({0, 1}, fn {f1, f2} -> {f1, {f2, f1+f2}} end)
|> Enum.take(15)
|> IO.inspect


defmodule Countdown do
  def sleep(seconds) do
    receive do
    after seconds * 1000 -> nil
    end
  end

  def say(text) do
    spawn fn -> :os.cmd('say #{text}') end
  end

  def timer do
    Stream.resource(
      fn ->
        {_h, _m, s} = :erlang.time
        60 - s - 1
      end,

      fn
        0 ->
          {:halt, 0}

        count ->
          sleep(1)
          { [inspect(count)], count - 1}
        end,

        fn _ -> nil end
    )
  end
end
