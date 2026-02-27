const express = require("express");
const { db, setupDatabase} = require("../mysql-init");
const router = express.Router();
// ROTA INICIAL
router.get("/", (req, res) => {
    res.send("Server on com MySQL!");
});
module.exports = router;

