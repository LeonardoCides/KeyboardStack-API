carregarEstoque();

async function carregarEstoque() {
    try {
        const resposta = await fetch(`${window.location.origin}/estoque`);
        if (!resposta.ok) throw new Error('Erro ao buscar dados do servidor');
        
        const produtos = await resposta.json();
        const tabela = document.querySelector('#tabela-estoque tbody');
        
        tabela.innerHTML = ''; 

        produtos.forEach(p => {
            tabela.innerHTML += `
                <tr>
                    <td>${p.id}</td>
                    <td>${p.nome}</td>
                    <td>${p.quantidade}</td>
                    <td>R$ ${p.preco}</td>
                    <td>
                        <button class="btn-venda" onclick="vender(${p.id})">Vender</button>
                    </td>
                </tr>
            `;
        });
    } catch (error) {
        console.error("Erro ao carregar o estoque:", error);
    }
}
const btnPdf = document.getElementById('btnPdf');
if (btnPdf) {
    btnPdf.addEventListener('click', () => {
        window.open(`${window.location.origin}/analise/gerar-pdf`, '_blank');
    });
}

async function vender(id) {
    try {
        const response = await fetch(`${window.location.origin}/vendas/${id}`, {
            method: 'PUT'
        });
        if (response.ok) {
            alert("Vendido com sucesso!");
            carregarEstoque();
        } else {
            const erro = await response.json();
            alert("Erro: " + erro.erro);
        }
    } catch (error) {
        console.error("Erro ao vender:", error);
    }
}

module.exports = carregarEstoque;
