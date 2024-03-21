var mysql = require("mysql2");
var sql = require('mssql');


var mySqlConfig = {
<<<<<<< HEAD
    host: "localhost",
    database: "HowToPlay",
    user: "root",
    password: "victor1122",
=======
    host: "localhost:3306",
    database: "HowToPlay",
    user: "root",
    password: "121314",
>>>>>>> 0e6e9435d32793abc25be6d3fe516680bb23f900
};

function executar(instrucao) {
    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        return new Promise(function (resolve, reject) {
            var conexao = mysql.createConnection(mySqlConfig);
            conexao.connect();
            conexao.query(instrucao, function (erro, resultados) {
                conexao.end();
                if (erro) {
                    reject(erro);
                }
                console.log(resultados);
                resolve(resultados);
            });
            conexao.on('error', function (erro) {
                return ("ERRO NO MySQL WORKBENCH (Local): ", erro.sqlMessage);
            });
        });
    } else {
        return new Promise(function (resolve, reject) {
            console.log("\nO AMBIENTE (desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
            reject("AMBIENTE NÃO CONFIGURADO EM app.js")
        });
    }
}

module.exports = {
    executar
}