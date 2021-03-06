defmodule SequenceSup.MixProject do
  use Mix.Project

  def project do
    [
      app: :sequence_sup,
      version: "0.1.0",
      elixir: "~> 1.10",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      mod: { SequenceSup.Application, 456 },
      registered: [ SequenceSup.Server ],
      extra_applications: [ :logger ]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      { :distillery, "~> 2.1.1", runtime: false }
    ]
  end
end
