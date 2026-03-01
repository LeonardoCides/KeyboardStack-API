const mysql = require("mysql2/promise");
require("dotenv").config();
const password = process.env.DB_PASS;
const user = process.env.DB_USER;
const db = mysql.createPool({
    host: 'localhost',
    user: user,
    password: password, 
    database: 'sistema_estoque'
});

async function setupDatabase() {
    try {
        const userTableQuery = `
            CREATE TABLE IF NOT EXISTS usuarios (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            senha VARCHAR(255) NOT NULL,
            role ENUM('root', 'vendedor') DEFAULT 'vendedor'
            );
                `;
            await db.execute(userTableQuery);

        const query = `
            CREATE TABLE IF NOT EXISTS produtos (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(255) NOT NULL,
                quantidade INT DEFAULT 0,
                preco DECIMAL(10, 2) DEFAULT 0.00,
                criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
        await db.execute(query);
        console.log("Banco de dados pronto para uso!");
    } catch (err) {
        console.error("Erro ao criar tabela:", err.message);
    }
}

module.exports = { db, setupDatabase };
