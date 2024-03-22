var express = require("express");
var router = express.Router();

var produtosController = require("../controllers/produtosController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    produtosController.listarProduto(req, res);
});

router.post("/cadastrar", function (req, res) {
    produtosController.cadastrar(req, res);
});

router.post("/deletar", function (req, res) {
    produtosController.excluir(req, res);
});

module.exports = router;