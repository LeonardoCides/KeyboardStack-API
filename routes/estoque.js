const express = require('express');
const router = express.Router();
const { db, setupDatabase } = require('../mysql-init');

// CRIAR NOVO PRODUTO
router.post("/estoque", async (req, res) => {
    const { nome, quantidade, preco } = req.body;
    if (!nome) {
        return res.status(400).json({ erro: "The product name is required!" });
    }
    
    const query = "INSERT INTO produtos (nome, quantidade, preco) VALUES (?, ?, ?)";
    const [result] = await db.execute(query, [nome, quantidade || 0, preco || 0]);
    
    res.status(201).json({ id: result.insertId, nome, quantidade });
});

// LISTAR TODO O ESTOQUE
router.get("/", async (req, res) => {
    const [rows] = await db.execute("SELECT * FROM produtos");
    res.status(200).json(rows);
});

// ATUALIZAR O ID DO PRODUTO
router.put("/mudar-id/:idAtual", async (req, res) => {
    const idAtual = req.params.idAtual;
    const novoId = req.body.novoId; 

    try {
      
        const query = "UPDATE produtos SET id = ? WHERE id = ?";
        const [result] = await db.execute(query, [novoId, idAtual]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ erro: "Produto não encontrado para mudar o ID." });
        }

        res.status(200).json({ 
            mensagem: `ID alterado de ${idAtual} para ${novoId} com sucesso!` 
        });
    } catch (e) {
        res.status(400).json({ erro: "Não foi possível mudar o ID (talvez o novo ID já esteja em uso)." });
    }
});

// DELETAR UM PRODUTO
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const [result] = await db.execute("DELETE FROM produtos WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
        return res.status(404).json({ Mensagem: "Id inexistente." });
    }
    res.status(200).json("Item excluido com sucesso!");
});



// CRIAR NOVO PRODUTO
router.post("/", async (req, res) => {
    const { nome, quantidade, preco } = req.body;
    if (!nome) {
        return res.status(400).json({ erro: "The product name is required!" });
    }
    
    const query = "INSERT INTO produtos (nome, quantidade, preco) VALUES (?, ?, ?)";
    const [result] = await db.execute(query, [nome, quantidade || 0, preco || 0]);
    
    res.status(201).json({ id: result.insertId, nome, quantidade });
});

// DELETAR UM PRODUTO
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const [result] = await db.execute("DELETE FROM produtos WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
        return res.status(404).json({ Mensagem: "Id inexistente." });
    }
    res.status(200).json("Item excluido com sucesso!");
});

module.exports = router;
