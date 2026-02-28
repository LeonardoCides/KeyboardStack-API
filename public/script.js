// Função para carregar o estoque
async function carregarEstoque() {
    const resposta = await fetch('http://localhost:3000/');
    const produtos = await resposta.json();
    
    const tabela = document.querySelector('#tabela-estoque tbody');
    tabela.innerHTML = ''; // Limpa a tabela

    produtos.forEach(p => {
        tabela.innerHTML += `
            <tr>
                <td>${p.id}</td>
                <td>${p.nome}</td>
                <td>${p.quantidade}</td>
                <td>R$ ${p.preco}</td>
                <td>
                    <button onclick="vender(${p.id})">Vender</button>
                </td>
            </tr>
        `;
    });
}

// Chamar a rota do PDF
document.getElementById('btnPdf').addEventListener('click', () => {
    window.open('http://localhost:3000/analise/gerar-pdf', '_blank');
});

carregarEstoque();