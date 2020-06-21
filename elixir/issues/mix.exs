defmodule Issues.MixProject do
  use Mix.Project

  def project do
    [
      app: :issues,
      escript: escript_config(),
      version: "0.1.0",
      elixir: "~> 1.10",
      source_url: "https://github.com/XandeCoding/100-days-of-code",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger]
    ]
  end

  defp deps do
    [
      { :httpoison, "~> 1.0.0" },
      { :poison, "~> 4.0.0" },
      { :ex_doc, "~> 0.22.1" },
      { :earmark, "~> 1.4.5"}
    ]
  end
  defp escript_config do
    [
      main_module: Issues.CLI
    ]
  end
end
