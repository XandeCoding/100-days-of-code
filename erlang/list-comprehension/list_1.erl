-module(list_1).
-export([test/0]).

test() ->
    Places = [{toronto, rain}, {montreal, storms}, {london, fog},
        {paris, sun}, {boston, fog}, {vancouver, snow}],
    FoggyPlaces = [ City || {City, Wheater} <- Places, Wheater =:= fog ],
    io:format(FoggyPlaces).
