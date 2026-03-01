//IMPORTACOES
const express = require("express");
const { db, setupDatabase} = require("./mysql-init");

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(require('cors')());

//Importando config do ENV
require("dotenv").config();
const PORT = process.env.PORT;

// Importando ROTAS
const rotasGerais = require("./routes/routes");
const rotasEstoque = require("./routes/estoque");
const rotasVendas = require("./routes/vendas");
const analiseRoutes = require("./routes/analise");

//Importando Banner
const banner = require("./chalk");

app.use("/analise", analiseRoutes);

app.use("/", rotasGerais);
app.use("/estoque", rotasEstoque);
app.use("/vendas", rotasVendas);
console.clear()

app.listen(PORT || 4000, () => {
    banner();
    console.log(`Server rodando na porta ${PORT} com MySQL.`);
});
setupDatabase();
// ROTA INICIAL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
