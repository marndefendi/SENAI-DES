const prisma = require("../data/prisma");

const cadastrarcarro = async (req, res) => {
    const carro = req.body;

    const placapadrao = carro.placa.trim().toUpperCase().replace("-", "");

    const marcaemodeloLetra = carro.marca.trim().split(" ");

    const Anoveiculo = Number(:carro.ano+"").split("")[0]);

    if (placapadrao.length == 7 && typeof (Anoveiculo) == "number" && marcaemodeloLetra.length == 2) {
        carro.marca = marcaemodeloLetra[0];

        const ncarro = await prisma.carros.create({
            data: carro
        });

        res.json(ncarro).status(201).end();
    } else {
        res.json("nao foi possivel terminar o cadastro").status(500).end();
    }
};

const listarcarro = async (req, res) => {
    const carros = await prisma.carros.findMany();

    res.json(carros).status(200).end();
};

const apagarcarro = async (req, res) => {
    const { id } = req.params;

    const carro = await prisma.carros.delete({
        where: { id }
    });

    res.json(carro).status(200).end();
};

const atualizarcarro = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const carro = await prisma.carros.update({
        where: { id },
        data: dados
    });

    res.json(carro).status(200).end();
};

module.exports = {
    cadastrarcarro,
    listarcarro,
    apagarcarro,
    atualizarcarro
};