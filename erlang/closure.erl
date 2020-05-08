%% Closure in Erlang
-module(closure).
-export([faustop/1, fire/1]).

faustop(Room) ->
    io:format("had a spark at ~s.~n", [Room]),
    fun() -> io:format("the ~s it's on fire bro~n", [Room]) end.

fire(F) ->
    F().