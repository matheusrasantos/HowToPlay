var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});


//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});
router.post("/deletar", function (req, res) {
    usuarioController.excluir(req, res);
});
router.post("/ativar", function (req, res) {
    usuarioController.ativar(req, res);
});

router.post("/desativar", function (req, res) {
    usuarioController.desativar(req, res);
});

router.post("/pesquisar", function (req, res) {
    usuarioController.pesquisar(req, res);
});



module.exports = router;