%% Exemplo usando recursao em Erlang
-module(recursion_01).
-export([len/1, tail_len/1]).

%% Recursao comum
len([]) -> 0;
len([_|T]) -> 1 + len(T).

%% Recursão de cauda
tail_len(L) -> tail_len(L, 0).
tail_len([], Acc) -> Acc;
tail_len([_|T], Acc) -> tail_len(T, Acc+1).
