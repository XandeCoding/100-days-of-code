// Exemplo modificado de Eloquent JavaScript pg.187
new Promise((resolve, reject) => reject(console.log("teste 1")))
    .then(value => console.log("teste 2"))
    .catch(reason => {
        console.log("Falha detectada " + reason);
        return "erro";
    }).then(value => console.log("teste 3", value));
