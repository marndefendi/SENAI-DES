const express = require("express");
const router = express.Router();

const carrocontrollers = require("../controllers/carro.controller");


router.post("/carros/cadastrar", carrocontrollers.cadastrarcarro);
router.get("/carros", carrocontrollers.listarcarro);
router.delete("/carro/:id", carrocontrollers.apagarcarro);
router.put("/carro", carrocontrollers.atualizarcarro);

module.exports = router;