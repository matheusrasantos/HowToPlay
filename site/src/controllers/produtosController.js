var produtosModel = require("../models/produtosModel");
var sessoes = [];

function testarProduto(req, res) {
    console.log("ENTRAMOS NA produtosController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listarProduto(req, res) {
    produtosModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function ativar(req, res) {

    var nome = req.body.nomeServer;

    produtosModel.ativar(nome)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function desativar(req, res) {

    var nome = req.body.nomeServer;

    produtosModel.desativar(nome)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function excluir(req, res) {

    var id = req.body.idServer;

    produtosModel.excluir(id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao deletar produto! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var preco = req.body.precoServer;
    var estoque = req.body.estoqueServer;
   
    console.log(nome)
    console.log(preco)
    console.log(estoque)
    if (nome == undefined) {
        res.status(400).send("O nome do produto está undefined!");
    } else if (preco == undefined) {
        res.status(400).send("O preco está undefined!");
    } else if (estoque == undefined) {
        res.status(400).send("O estoque está undefined!");
    } else {
        

        produtosModel.cadastrar(nome, preco, estoque)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar,
    listarProduto,
    testarProduto,
    ativar,
    desativar,
    excluir
}
