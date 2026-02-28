const express = require("express");
const { db, setupDatabase} = require("../mysql-init");
const router = express.Router();
// ROTA INICIAL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
module.exports = router;

