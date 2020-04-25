fetch('https://rickandmortyapi.com/graphql/', {
        method: "POST",
        body:
        `{
            characters(filter: { name: "rick", species: "alien"}) {
            info {
              count
            }
            results {
              name
              species
              type
            }
          }
        }`
    }).then((response) => {
        console.log(response.json)
    })
