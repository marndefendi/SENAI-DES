const express = require("express");

const router = express.Router();

const { 
    buscarImagem,
    cadastrarImagem,
    cadastrar, 
    listar, 
    buscar, 
    atualizar, 
    excluir} = require("../controllers/eventos.controller");

const upload = require("../middleware/uploadImagem");

router.get("/imagem/:id", buscarImagem);
router.post("/imagem/cadastrar/:id", upload, cadastrarImagem);
router.post("/cadastrar", cadastrar);
router.get("/listar", listar);
router.get("/buscar/:id", buscar);
router.put("/atualizar/:id", atualizar);
router.delete("/excluir/:id", excluir);

module.exports = router;
