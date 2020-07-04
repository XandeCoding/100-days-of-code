defmodule PlugTest.MixProject do
  use Mix.Project

  def project do
    [
      app: :plug_test,
      version: "0.1.0",
      elixir: "~> 1.10",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  def application do
    [
      extra_applications: [:logger],
      mod: {PlugTest.Application, []}
    ]
  end

  defp deps do
    [
      { :plug_cowboy, "~> 2.3" }
    ]
  end
end
