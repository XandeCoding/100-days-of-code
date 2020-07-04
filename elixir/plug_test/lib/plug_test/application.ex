defmodule PlugTest.Application do
  use Application
  require Logger

  def start(_type, _args) do
    children = [
      # { Plug.Cowboy, scheme: :http, plug: PlugTest.HelloWorldPlug, options: [ port: 8080] }
      Plug.Cowboy.child_spec(scheme: :http, plug: PlugTest.Router, options: [port: comboy_port()])
    ]

    opts = [strategy: :one_for_one, name: PlugTest.Supervisor]
    Logger.info("Starting application...")
    Supervisor.start_link(children, opts)
  end

  defp comboy_port, do: Application.get_env(:plug_test, :comboy_port, 8080)
end
