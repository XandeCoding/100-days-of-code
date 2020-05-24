%% Programa que testa varios tipos de excecoes

-module(exceptions).
-compile(export_all).

sword(1) -> throw(slice);
sword(2) -> erlang:error(cut_arm);
sword(3) -> exit(cut_leg);
sword(4) -> throw(punch);
sword(5) -> exit(cross_bridge).

black_knight(Attack) when is_function(Attack, 0) ->
    try Attack() of
        _ -> "None shall pass."
    catch
        throw: slice -> "It is but a scratch.";
        error: cut_arm -> "I've had worse.";
        exit: cut_leg -> "Come on you bastard";
        _:_ -> "Just a flesh wound."
    end.