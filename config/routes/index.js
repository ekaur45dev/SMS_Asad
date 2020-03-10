const router = require("express").Router();
const accountRoutes = require("./account/index");
router.use("/account", accountRoutes);
router.get("/", (req, res) => {
    res.status(200).send("<h1>Api is running...</h1>");
})
module.exports = router;