defmodule SequenceSup.Application do

  use Application

  def start(_type, initial_number) do
    children = [
      { SequenceSup.Stash, initial_number },
      { SequenceSup.Server, nil }
    ]

    opts = [strategy: :rest_for_one, name: SequenceSup.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
