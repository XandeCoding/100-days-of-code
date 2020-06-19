people = [
  %{ name: "Grumpy",    height: 1.24 },
  %{ name: "Dave",      heigth: 1.90 },
  %{ name: "Dopey",     heigth: 1.90 },
  %{ name: "Shaquille", height: 2.16 },
  %{ name: "Sneezy",    height: 1.58 }
]

IO.inspect(for person = %{ height: height } <- people, height > 1.5, do: person)

defmodule Subscriber do
  defstruct name: "", paid: false, over_18: true
end

cast = [
  %{
    character: "Buttercup",
    actor: %{
      first: "Robin",
      last: "Wright"
    },
    role: "princess"
  },
  %{
    character: "Westley",
    actor: %{
      first: "Cary",
      last: "Elwes"
    },
    role: "farm boy"
  }
]

IO.inspect get_in(cast, [Access.all(), :character])
IO.inspect get_in(cast, [Access.at(1), :role])
IO.inspect get_in(cast, [Access.at(1), Access.key(:actor), :first])

set1 = 1..5 |> Enum.into(MapSet.new)
set2 = 3..8 |> Enum.into(MapSet.new)

MapSet.member? set1, 3
MapSet.union set1, set2

# It work's with collections
list = Enum.to_list 1..56

Enum.concat([1, 2, 3], [4, 5, 6])
Enum.map(list, &(&1 + &1))

require Integer
Enum.filter(list, &Integer.is_even/1)
Enum.reject(list, &Integer.is_even/1)
Enum.sort ["there", "was", "a", "crooked", "man"]
Enum.to_list 1..15 |> Enum.sort  :desc
Enum.to_list(15..1) |> Enum.sort(:asc)

Enum.all(list, &(&1 < 5))
Enum.any(list, &(&1 < 5))
Enum.member?(list, 4)
Enum.empty?(list)

