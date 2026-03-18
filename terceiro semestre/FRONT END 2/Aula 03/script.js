const modalFilme = document.querySelector("#modalFilme")
var Filmes = JSON.parse(localStorage.getItem("Filmes")) || [];

renderizarTabela();

function salvarLocal(){
    localStorage.setItem("Filmes", JSON.stringify(Filmes));
    window.location.reload();
}

function abrirModal(){
    modalFilme.style.display="block";
}

function fecharModal(){
    modalFilme.style.display="none";
}

const formFilme = document.querySelector("#formFilme");
formFilme.addEventListener("submit", e => {
    e.preventDefault();
    const obj ={
        capa : formFilme.capa.value,
        nome : formFilme.nome.value,
        diretor: formFilme.diretor.value,
        ano: formFilme.ano.value,
        genero: formFilme.genero.value,
    }
    Filmes.push(obj);
    formFilme.reset();
    salvarLocal(); 
})

function renderizarTabela(){
    const corpo = document.querySelector("#dados");
    corpo.innerHTML = "";
    Filmes.forEach((c, i) =>{
        corpo.innerHTML += `
        <tr>
            <td><img src="${c.capa}" width="80"></td>
            <td>${c.nome}</td>
            <td>${c.diretor}</td>
            <td>${c.ano}</td>
            <td>${c.genero}</td>
            
            <td><button onclick="excluir(${i})">Excluir</button></td>
        </tr>
        `;
    })
}

function excluir(indice){
    Filmes.splice(indice,1);
    renderizarTabela();
}