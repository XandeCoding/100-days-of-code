function createCard(element) {
  const card = document.createElement('div');
  card.setAttribute('class', 'card');

  const title = document.createElement('h1')
  title.textContent = element.title

  const description = document.createElement('p')
  element.description = element.description.substring(0, 300);
  description.textContent = `${element.description}...`

  container.appendChild(card)
  card.appendChild(title)
  card.appendChild(description)

}

const app = document.getElementById('root')
const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

fetch('https://ghibliapi.herokuapp.com/films?limit=20')
.then(response => response.json())
.then(movies => {
  console.log(...movies)
  movies.forEach(movie => {
    createCard(movie)
  })
})
