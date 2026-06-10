const modalCli = document.querySelector("#modalCli")
<<<<<<< HEAD
var clientes = JSON.parse(localStorage.getItem("clientes")) || [];

renderizarTabela();

function salvarLocal(){
    localStorage.setItem("clientes", JSON.stringify(clientes));
    window.location.reload();
}
=======
var clientes = [];
>>>>>>> f96682970c1a1f3631fb7c27be8805068bde0ca2

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
<<<<<<< HEAD
    formCli.reset();
    salvarLocal(); 
=======
>>>>>>> f96682970c1a1f3631fb7c27be8805068bde0ca2
})

function renderizarTabela(){
    const corpo = document.querySelector("#dados");
    corpo.innerHTML = "";
    clientes.forEach((c, i) =>{
<<<<<<< HEAD
        corpo.innerHTML += `
=======
        corpo.innerHTML +=
>>>>>>> f96682970c1a1f3631fb7c27be8805068bde0ca2
        <tr>
            <td>${c.cpf}</td>
            <td>${c.nome}</td>
            <td>${c.sobrenome}</td>
            <td>${c.nascimento}</td>
<<<<<<< HEAD
            <td><button onclick="excluir(${i})">Excluir</button></td>
        </tr>
        `;
    })
}

function excluir(indice){
    clientes.splice(indice,1);
    renderizarTabela();
=======
            <td><button>Excluir</button></td>
        </tr>
    })
>>>>>>> f96682970c1a1f3631fb7c27be8805068bde0ca2
}