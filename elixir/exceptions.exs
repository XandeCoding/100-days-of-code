raise RuntimeError, message: "override message"

case File.open("config_file") do
  {:ok, file} ->
    process(file)
  {:error, message} ->
    raise "Failed to open config file: #{message}"
end
