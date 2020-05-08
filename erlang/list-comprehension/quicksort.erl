-module(quicksort).
-export([quicksort/1]).

quicksort([]) -> [];
quicksort([Pivot|Rest]) ->
    quicksort([Smaller || Smaller <- Rest, Smaller =< Pivot])
    ++ [Pivot] ++
    quicksort([Larger || Larger <- Rest, Larger > Pivot]).
