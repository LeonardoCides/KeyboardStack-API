import mysql.connector
import os
from dotenv import load_dotenv
from fpdf import FPDF

load_dotenv()

def criar_pdf():
    try:
        # Conexão com o Banco
        db = mysql.connector.connect(
            host=os.getenv("DB_HOST"),
            user=os.getenv("DB_USER"),
            password=os.getenv("DB_PASS"),
            database=os.getenv("DB_NAME")
        )
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT nome, quantidade, preco FROM produtos WHERE quantidade < 5")
        produtos = cursor.fetchall()

        # Configuração do PDF
        pdf = FPDF()
        pdf.add_page()
        pdf.set_font("Arial", "B", 16)
        
        # Título
        pdf.cell(190, 10, "Relatorio de Reposicao de Estoque", ln=True, align="C")
        pdf.ln(10) # Pula linha
        
        # Cabeçalho da Tabela
        pdf.set_font("Arial", "B", 12)
        pdf.cell(100, 10, "Produto", border=1)
        pdf.cell(40, 10, "Qtd Atual", border=1)
        pdf.cell(50, 10, "Preco Unit.", border=1, ln=True)

        # Dados
        pdf.set_font("Arial", "", 12)
        for p in produtos:
            pdf.cell(100, 10, p['nome'], border=1)
            pdf.cell(40, 10, str(p['quantidade']), border=1)
            pdf.cell(50, 10, f"R$ {p['preco']:.2f}", border=1, ln=True)

        # Salva o arquivo
        pdf.output("relatorio_estoque.pdf")
        print("PDF gerado com sucesso!")

        cursor.close()
        db.close()

    except Exception as e:
        print(f"Erro: {e}")

if __name__ == "__main__":
    criar_pdf()
