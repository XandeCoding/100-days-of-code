%% Alguns formas de usar condições em Erlang

-module(syntax_01).
-export([tem_pandemia/1, esta_sentado/1]).


tem_pandemia(X) when X =:= true -> io:format("Fique em casa~n");
tem_pandemia(_) -> io:format("Vai tomar litrão!~n").

esta_sentado(X) ->
    if X =:= true -> io:format("Arruma a postura~n");
       X =:= false -> io:format("Lave as maos~n")
    end.
