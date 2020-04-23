exports.faustop = function() {
    const fraseFaustop = [
        'Estou mais sozinho que goleiro na hora do pênati.',
        'Ô loco, bixo! Brincadeira! Esta fera aí, meu!',
        'Tá pegando fogo, bicho',
        'Selena onde tá minha camisa de bolinha?'
    ];

    return fraseFaustop[getRandomInt(0, fraseFaustop.length)];
};

function getRandomInt(min, max) {
    // fonte: Documentação Mozila Firefox
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};
