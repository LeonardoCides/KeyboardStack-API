const express = require("express");
const mysql = require("mysql2/promise");
const { db, setupDatabase} = require("./mysql-init")
const app = express();

app.use(express.json());
console.clear()
setupDatabase();
// ROTA INICIAL
app.get("/", (req, res) => {
    res.send("Server on com MySQL!");
});

// LISTAR TODO O ESTOQUE
app.get("/estoque", async (req, res) => {
    const [rows] = await db.execute("SELECT * FROM produtos");
    res.status(200).json(rows);
});

// CRIAR NOVO PRODUTO
app.post("/estoque", async (req, res) => {
    const { nome, quantidade, preco } = req.body;
    if (!nome) {
        return res.status(400).json({ erro: "The product name is required!" });
    }
    
    const query = "INSERT INTO produtos (nome, quantidade, preco) VALUES (?, ?, ?)";
    const [result] = await db.execute(query, [nome, quantidade || 0, preco || 0]);
    
    res.status(201).json({ id: result.insertId, nome, quantidade });
});

// VENDER ITEM (Lógica que estava no seu arquivo separado agora no SQL)
app.patch("/estoque/vender/:id", async (req, res) => {
    try {
        const id = req.params.id;
        // Diminui 1 apenas se a quantidade for maior que 0
        const query = "UPDATE produtos SET quantidade = quantidade - 1 WHERE id = ? AND quantidade > 0";
        const [result] = await db.execute(query, [id]);

        if (result.affectedRows === 0) {
            return res.status(400).json({ erro: "Produto esgotado ou não encontrado" });
        }
        res.json({ mensagem: "Item vendido com sucesso" });
    } catch (e) {
        res.status(500).json({ erro: e.message });
    }
});

// ATUALIZAR O ID DO PRODUTO
app.put("/estoque/mudar-id/:idAtual", async (req, res) => {
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
app.delete("/estoque/:id", async (req, res) => {
    const id = req.params.id;
    const [result] = await db.execute("DELETE FROM produtos WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
        return res.status(404).json({ Mensagem: "Id inexistente." });
    }
    res.status(200).json("Item excluido com sucesso!");
});

app.listen(3000, () => {
    console.log("Server rodando na porta 3000 com MySQL.");
});
