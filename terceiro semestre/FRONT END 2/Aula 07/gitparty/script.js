const eventos = [];

carregareventos();

function carregareventos() {
    fetch(url + '/eventos')
        .then(response => response.json())
        .then(data => {
            eventos.push(...data);
        })
        .then(() => listarCards())
        .catch(e => alert('Problemas com a conexão com a API'))
}

function listarCards() {
    const container = document.querySelector('main');
    container.innerHTML = '';
    eventos.forEach(evento => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${evento.img}" alt="${evento.titulo}">
        <h3>${evento.titulo}</h3>
        `;
        container.appendChild(card);
    });
}
