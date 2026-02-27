//IMPORTACOES
const express = require("express");
const { db, setupDatabase} = require("./mysql-init");

//Importando config do ENV
require("dotenv").config();
const PORT = process.env.PORT;

// Importando ROTAS
const rotasGerais = require("./routes/routes");
const rotasEstoque = require("./routes/estoque");
//Importando Banner
const banner = require("./chalk");

const app = express();
app.use(express.json());

const analiseRoutes = require("./routes/analise");
app.use("/analise", analiseRoutes);

app.use("/", rotasGerais);
app.use("/estoque", rotasEstoque)

console.clear()

app.listen(PORT || 4000, () => {
    banner();
    console.log(`Server rodando na porta ${PORT} com MySQL.`);
});
setupDatabase();

