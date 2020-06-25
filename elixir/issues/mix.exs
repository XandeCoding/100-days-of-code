defmodule Issues.MixProject do
  use Mix.Project

  def project do
    [
      app: :issues,
      escript: escript_config(),
      version: "0.1.0",
      name: "Issues",
      elixir: "~> 1.10",
      source_url: "https://github.com/XandeCoding/100-days-of-code",
      build_embedded: Mix.env == :prod,
      start_permanent: Mix.env() == :prod,
      test_coverage: [ tool: ExCoveralls ],
      preferred_cli_env: [
        "coveralls": :test,
        "coveralls.detail": :test,
        "coveralls.post": :test,
        "coveralls.html": :test
      ],
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
      { :earmark, "~> 1.4.5" },
      { :excoveralls, "~> 0.13.0", only: :test }
    ]
  end
  defp escript_config do
    [
      main_module: Issues.CLI
    ]
  end
end
