import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS produto(
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    nome TEXT NOT NULL UNIQUE,
    valor TEXT NOT NULL,
    tipo TEXT NOT NULL
    )
    `);

    function creatProdutoRepository(novoProduto) {
        return new Promisse((resolve,reject) => {
            const{
                nome,
                valor,
                tipo,
            } = novoProduto;
            db.run(
                `INSERT INTO produto(nome, valor, tipo)
                VALUES(?,?,?)`,
                [nome, valor, tipo], 
                (error) => {
                    if (error) {
                        reject(error);
                    }else {
                        resolve(novoProduto);
                    }
                }
            )

        });
    }

    export default {
        creatProdutoRepository
    }