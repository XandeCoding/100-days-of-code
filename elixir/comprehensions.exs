min_maxes = [{1,4}, {2,3}, {10, 15}]
new_list = for {min, max} <- min_maxes, n <- min..max, do: n
IO.inspect new_list

first8 = 1..8
for x <- first8, y <- first8, x >= y, rem(x*y, 10) == 0, do: { x, y }

reports = [ dallas: :hot, minneapolis: :cold ]
for { city, wheater } <- reports, do: { wheater, city }

for << ch <- "hello" >>, do: ch
for << ch <- "hello" >>, do: <<ch>>

for x <- ~w{ cat dog }, into: Map.new, do: { x, String.upcase(x) }

tax_rates = [ NC: 0.075, TX: 0.08 ]
orders = [
  [ id: 123, ship_to: :NC, net_amount: 100.00 ],
  [ id: 124, ship_to: :OK, net_amount: 35.50 ],
  [ id: 125, ship_to: :TX, net_amount: 24.00 ]
]
