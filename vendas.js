const estoque = require("./estoque");
function realizarVenda (id){
    const produto = estoque.find(p => p.id === id);
    if (!produto) throw new console.error(("NOT_FOUND"));
    if (produto.qtd <= 0) throw new error("OUT_OF_STOCK");

    produto.qtd -= 1;
    return produto;
};

module.exports = realizarVenda;

