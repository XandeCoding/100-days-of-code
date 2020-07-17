class listaDeCompras{
    static produtos = [ 'feijão', 'pão', 'pizza', 'sorvete']

    static *comprado() {
        for (let index=0; index < listaDeCompras.produtos.length; index++){
            yield console.log(index, '-', listaDeCompras.produtos[index])
            delete listaDeCompras.produtos[index]
        }
        yield console.log('--Comprou tudo que tinha na lista padawan--')
    }
}

const comprei = listaDeCompras.comprado()
comprei.next()
comprei.next()
comprei.next()
comprei.next()
comprei.next()
