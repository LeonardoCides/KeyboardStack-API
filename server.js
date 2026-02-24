const express = require("express");
const app = express();
const estoque = require('./estoque');
const realizarVenda = require("./vendas")


app.use(express.json());

app.get("/" ,(req,res) => {
    res.send("Server on");
});

app.post("/estoque", (req, res) => {
    const novoProduto = req.body;
    if(!novoProduto){
        return res.status(400).json({erro: "The product name is required!"})
    }
    res.send(estoque.push(novoProduto))
});

app.patch("/estoque/vender/:id", (req, res) => {
    try{
        const produtoAtualizado = realizarVenda(Number(req.params.id));
        res.json({mensagem: "Item vendido com sucesso", produto: produtoAtualizado.nome});
    }catch(e){
        const status = e.message === "NOT_FOUND" ? 404 : 400
        res.status(status).json({erro: e.message})
    }
});

app.get("/estoque", (req,res) => {
    res.status(200).json(estoque);
    
});

//SUBIR NO SERVER NA PORTA 3000
app.listen(3000, ()=>{
    console.log("Server rodando na porta 3000.")
})

