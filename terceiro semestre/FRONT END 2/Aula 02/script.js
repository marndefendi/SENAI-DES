const modalCli = document.querySelector("#modalCli")
var clientes = [];

function abrirModal(){
    modalCli.style.display="block";
}

function fecharModal(){
    modalCli.style.display="none";
}

const formCli = document.querySelector("#formCli");
formCli.addEventListener("submit", e => {
    e.preventDefault();
    const obj ={
        cpf : formCli.cpf.value,
        nome: formCli.nome.value,
        sobrenome: formCli.sobrenome.value,
        nascimento: formCli.nascimento.value,
    }
    clientes.push(obj);
})

function renderizarTabela(){
    const corpo = document.querySelector("#dados");
    corpo.innerHTML = "";
    clientes.forEach((c, i) =>{
        corpo.innerHTML +=
        <tr>
            <td>${c.cpf}</td>
            <td>${c.nome}</td>
            <td>${c.sobrenome}</td>
            <td>${c.nascimento}</td>
            <td><button>Excluir</button></td>
        </tr>
    })
}