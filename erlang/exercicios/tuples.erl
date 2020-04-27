-module(tuples).
-export([temperatureIsPrecise/1, test/0]).

temperatureIsPrecise(Temperature) when Temperature <- {celsius, _} ->
    io:format("Temperature is precise").

test() ->
    Temperature = {celsius, 23.213},
    temperatureIsPrecise(Temperature).
