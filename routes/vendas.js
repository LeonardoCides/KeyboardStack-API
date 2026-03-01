const express = require('express');
const router = express.Router();
const { db } = require('../mysql-init');

router.put("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const [rows] = await db.query("SELECT quantidade FROM produtos WHERE id = ?", [id]);
        
        if (!rows || rows.length === 0) {
            return res.status(404).json({ erro: "Produto não encontrado no banco." });
        }

        const produto = rows[0];

        if (produto.quantidade <= 0) {
            return res.status(400).json({ erro: "Estoque esgotado!" });
        }

        await db.query("UPDATE produtos SET quantidade = quantidade - 1 WHERE id = ?", [id]);
        
        res.json({ mensagem: "Venda realizada com sucesso!" });

    } catch (error) {
        
        console.error("ERRO SQL DETALHADO:", error); 
        res.status(500).json({ erro: "Erro ao processar a venda no banco de dados." });
    }
});
module.exports = router;
