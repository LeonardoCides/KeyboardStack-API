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
