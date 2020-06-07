anonymous_fn = fn 
    {0, 0, _ } -> IO.puts "FizzBuzz"
    {0, _, _ } -> IO.puts "Fizz"
    {_, 0, _} -> IO.puts "Buzz"
end

anonymous_fn.({0, 2, 3})
anonymous_fn.({0, 0, 3})
anonymous_fn.({3, 0, 3})


greeter = fn name -> (fn -> IO.puts "Hello #{name}" end) end
dave_greeter = greeter.("Dave")
dave_greeter.()

prefix = fn first_name -> (fn second_name -> IO.puts "#{first_name} #{second_name}" end) end
test_prefix = prefix.('Mrs.')
test_prefix.('Flanders')

Enum.map [1,2,3,4], fn x -> x + 2 end
Enum.each [1,2,3,4], fn x -> IO.inspect x end

Enum.map [1, 2, 3, 4], &(&1 + 2)
Enum.each [1, 2, 3, 4], &(IO.inspect &1)
