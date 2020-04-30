const promises = []

fetch('https://ghibliapi.herokuapp.com/films?limit=2')
.then(response => response.json())
.then(movies => {
  console.log(...movies)
  const tableDoc = document.getElementById("table-body")
  movies.forEach(movie => {
    const row = tableDoc.insertRow(tableDoc.rows.length)
    console.log('teste', movie)

    let cellName = row.insertCell(0)
    let cellDirector = row.insertCell(1)
    let cellRelease = row.insertCell(2)
    cellName.innerHTML = movie.title
    cellDirector.innerHTML = movie.director
    cellRelease.innerHTML = movie.release_date
  })
})
