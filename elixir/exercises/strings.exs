defmodule ReverseEqual do
  def of(word1, word2), do: check(Enum.reverse(word1), word2)
  def check(wordReverse, word2) when wordReverse == word2, do: true
end

defmodule Anagram do
  def of(word1, word2) do
    for << ch1 <- word1 >>, << ch2 <- word2 >> 
  end
end

