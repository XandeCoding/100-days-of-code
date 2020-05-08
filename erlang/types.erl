%% Teste com tipos em Erlang
-module(types).
-export([qual_tipo/1]).

qual_tipo(X) ->
    if  is_atom(X) -> io:format("~p e atomo~n", [X]);
        is_list(X) -> io:format("~p e lista~n", [X]);
        is_integer(X) -> io:format("~p e inteiro~n", [X]);
        true -> io:format("Preguica de escrever outros tipos...~n")
    end.
