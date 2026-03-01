const { db } = require("../mysql-init");
async function verificarRoot(req, res, next) {
    const userId = req.headers['user-id'];

    if(!userId){
        return res.status(401).json({erro: "User nao identificado"});
    }

    try {
        const [rows] = await db.query("SELECT role FROM usuarios WHERE id = ?", [userId]);
        if (rows.length > 0 && rows[0].role === 'root') {
            next(); 
        } else {
            res.status(403).json({ erro: "Acesso negado: Requer privilégios de ROOT." });
        }
    } catch (error) {
        res.status(500).json({erro: "Erro ao verificar permissoes"});
        
    }
    
}
