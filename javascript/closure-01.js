function Pessoa(nome, crush, diaFavorito, artistaFavorito) {
    const Pessoa = {};
    Pessoa.nome = nome;
    Pessoa.crush = crush;
    Pessoa.diaFavorito = diaFavorito;
    Pessoa.artistaFavorito = artistaFavorito;

    const imprime = () => {
        return console.log(
            '\nNome: ', Pessoa.nome,
            '\nCrush: ', Pessoa.crush,
            '\nDia Favorito: ', Pessoa.diaFavorito,
            '\nArtista Favorito: ', Pessoa.artistaFavorito);
    }
    return Pessoa;
}

const fausto = Pessoa('Fausto Silva', 'Selena Gomez', 'Domingo', 'Beyoncé');
console.log(fausto.nome);

// fausto();