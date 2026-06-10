const url = 'https://receitasapi-b-2025.vercel.app';
const receitas = [];

carregarReceitas();

function carregarReceitas() {
    fetch(url + '/receitas')
        .then(response => response.json())
        .then(data => {
            receitas.push(...data);
        })
        .then(() => listarCards())
        .catch(e => alert('Problemas com a conexão com a API'))
}

function listarCards() {
    const container = document.querySelector('main');
    container.innerHTML = '';
    receitas.forEach(receita => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${receita.img}" alt="${receita.nome}">
        <h3>${receita.nome}</h3>
            <p>Custo Aproximado: ${receita.custoAproximado}</p>
        `;
        container.appendChild(card);
    });
}
