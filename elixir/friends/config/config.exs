import Config

config :friends, ecto_repos: [Friends.Repo]

config :friends, Friends.Repo,
  database: "friends",
  username: "root",
  password: "friends",
  hostname: "localhost"
