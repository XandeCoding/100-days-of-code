-module(tree_lookup).
-compile(export_all).

has_value(Val, Tree) ->
    try has_value1(Val, Tree) of
        false -> false
    catch
        true -> true
    end.

has_value1(_, { node, 'nil' }) ->
    false;
has_value1(Val, { node, { _, Val, _, _ }}) ->
    throw(true);
has_value1(Val, { node, {_, _, Left, Right }}) ->
    has_value1(Val, Left),
    has_value1(Val, Right).