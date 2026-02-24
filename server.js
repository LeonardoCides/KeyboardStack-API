const express = require("express");
const app = express();

//IMPORTAÇÕES
const estoque = require('./estoque');
const realizarVenda = require("./vendas")

//MIDDLEWARE
app.use(express.json());

//ROTA INICIAL
app.get("/" ,(req,res) => {
    res.send("Server on");
});

//LISTAR TODO O ESTOQUE
app.get("/estoque", (req,res) => {
    res.status(200).json(estoque);
    
});
//CRIAR NOVO PRODUTO
app.post("/estoque", (req, res) => {
    const novoProduto = req.body;
    if(!novoProduto){
        return res.status(400).json({erro: "The product name is required!"})
    }
    res.send(estoque.push(novoProduto))
});

//VENDER ITEM (ATUALIZACAO PARCIAL)
app.patch("/estoque/vender/:id", (req, res) => {
    try{
        const produtoAtualizado = realizarVenda(Number(req.params.id));
        res.json({mensagem: "Item vendido com sucesso", produto: produtoAtualizado.nome});
    }catch(e){
        const status = e.message === "NOT_FOUND" ? 404 : 400
        res.status(status).json({erro: e.message})
    }
});

//DELETAR UM PRODUTO DO ESTOQUE
app.delete("/estoque/:id", (req, res) =>{
    const id = Number(req.params.id);
    const index = estoque.findIndex(p => p.id === id);
    if(index === -1){
        res.status(404).json({Mensagem: "Id inexistente."})
    };
    estoque.splice(index, 1);
    res.status(200).json("Item excluido com sucesso!");
})

// START SERVER
app.listen(3000, ()=>{
    console.log("Server rodando na porta 3000.")
});

