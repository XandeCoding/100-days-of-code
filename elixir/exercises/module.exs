defmodule Times do
    def double(n), do: n * 2
    def triple(n), do: n * 3
    def quadruple(n), do: double(double(n))
end

defmodule Factorial do
    def of(0), do: 1
    def of(n), do: n * of(n-1)
end

defmodule Sum do
   def of(0), do: 0
   def of(n), do: n + of(n-1)
end

defmodule GCD do
    def of(x, 0), do: x
    def of(x, y), do: of(y, rem(x, y))
end


defmodule Pipe do
    def list(number), do:
        (1..number)
        |> Enum.map(&(&1*&1))
        |> Enum.filter(&(&1 < 40))
end

defmodule Import do
    def import1 do
        List.flatten [1, [2,3], 4]
    end
    def import2 do
        import List, only: [flatten: 1]
        flatten [5, [6, 7], 8]
    end
end

defmodule Attribute do
    @author "Dave Thomas"
    def get_author do
        @author
    end
end
