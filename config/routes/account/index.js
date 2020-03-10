const accountController = require("../../../src/controllers/account/index");

const router = require("express").Router();
router.get("/", (req, res) => {
    res.status(200).send("<h1>Api is running...</h1>");
});
router.post("/login", accountController.login);
module.exports = router;