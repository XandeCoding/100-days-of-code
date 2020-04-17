-module(list_1).
-export([test]).

test() ->
    Places = [{toronto, rain}, {montreal, storms}, {london, fog}, {paris, sun}, {boston, fog}, {vancouver, snow}],
   FoggyPlaces = [X || {X, fog} <- Places].

