const prisma = require("../data/prisma");

const cadastrarcliente = async (req, res) => {
    const cliente = req.body;

    const tamanhoNome = cliente.nome.split(" ").length();

    const digitosCpf = cliente.cpf.replace(" ").length();

    const emailValido = cliente.email.toLowerCase().includes("@");

    const CNHnum = Number(cliente.cnh.split("")[0]);

    if (tamanhoNome >= 2 && digitosCpf == 11 && emailValido == true && typeof(CNHnum) == "number") {
        const ncliente = await prisma.clientes.create({
            data: cliente
        });

        res.json(ncliente).status(201).end();
    } else {
        res.json("nao foi possivel terminar o cadastro").status(500).end();
    }

};

const listarclientes = async (req, res) => {
    const clientes = await prisma.clientes.findMany();

    res.json(clientes).status(200).end();
};

const buscarcliente = async (req, res) => {
    const { id } = req.params;

    const cliente = await prisma.clientes.findUnique({
        where: { id },
        include: {
            alunos: true
        }
    });

    res.json(cliente).status(200).end();
};

const apagarcliente = async (req, res) => {
    const { id } = req.params;

    const cliente = await prisma.clientes.delete({
        where: { id }
    });

    res.json(cliente).status(200).end();
};

const atualizarcliente = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const cliente = await prisma.clientes.update({
        where: { id },
        data: dados
    });

    res.json(cliente).status(200).end();
};

module.exports = {
    cadastrarcliente,
    listarclientes,
    buscarcliente,
    apagarcliente,
    atualizarcliente
};