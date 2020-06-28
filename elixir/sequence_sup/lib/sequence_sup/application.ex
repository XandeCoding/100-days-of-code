defmodule SequenceSup.Application do

  use Application

  def start(_type, _args) do
    children = [
      { SequenceSup.Stash, 123},
      { SequenceSup.Server, nil }
    ]

    opts = [strategy: :rest_for_one, name: SequenceSup.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
