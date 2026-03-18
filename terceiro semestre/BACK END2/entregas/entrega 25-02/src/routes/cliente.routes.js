const express = require("express");
const router = express.Router();

const clientescontrollers = require("../controllers/cliente.controller");

router.post("/clientes", clientescontrollers.cadastrarcliente);
router.get("/clientes", clientescontrollers.listarclientes);
router.get("/cliente/:id", clientescontrollers.buscarcliente);
router.delete("/cliente/:id", clientescontrollers.apagarcliente);
router.put("/cliente", clientescontrollers.atualizarcliente);

module.exports = router;