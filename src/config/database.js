import sqlite3 from "sqlite3";

const db = new sqlite3.Database('database.sqlite',
    (error) => {
        if (error){
            console.error("erro ao conectar com banco de dados:", error.message);
        }else{
            console.log("conectado ao banco de dados com sucesso.")
        }

    }
);

export default db;