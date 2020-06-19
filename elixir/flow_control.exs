if 1 == 1, do: "true part", else: "false part"
unless 1 == 1, do: "false part", else "true part"
if 1 == 1 do
  "true part"
else
  "false part"
end

# Using case
defmodule Users do
  dave = %{ name: "Dave", state: "TX", likes: "programming" }
  case dave do
    %{ state: some_state } = person ->
      IO.puts "#{person.name} lives in #{some_state}"
    _ ->
      IO.puts "No matches"
  end
end

# Using guards
dave = %{ name: "Dave", age: 27 }
case dave do
  person = %{ age: age } when is_number(age) and age >= 21 ->
    IO.puts "You are cleared to enter the foo Bar, #{person.name}"
  _ ->
    IO.puts "Sorry, no admission"
  end
