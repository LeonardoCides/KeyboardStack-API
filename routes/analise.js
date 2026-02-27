const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

router.get("/gerar-pdf", (req, res) => {
    // Resolve o caminho para a raiz do projeto (onde está o analise.py)
    const pythonScriptPath = path.join(__dirname, '../analise.py');
    const pdfPath = path.join(__dirname, '../relatorio_estoque.pdf');

    // Executa o Python apontando para o caminho correto do script
    const pythonProcess = spawn('python', [pythonScriptPath]);
    
    pythonProcess.on('close', (code) => {
        if (code === 0) {
            // Verifica se o PDF foi criado na raiz
            if (fs.existsSync(pdfPath)) {
                res.contentType("application/pdf");
                return res.sendFile(pdfPath);
            } else {
                return res.status(500).send("Python finalizou, mas o PDF não foi gerado na raiz.");
            }
        } else {
            return res.status(500).send("Erro ao executar o script Python.");
        }
    });
});

module.exports = router;
