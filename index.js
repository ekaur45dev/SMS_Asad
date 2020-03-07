const express = require("express");
const app = express();
const httpApp = require("http").createServer(app);
const path = require("path");
const routes = require("./routes");
require("dotenv").config();
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/", express.static(path.join(__dirname, "Angular8/dist/")));
app.use("/api", routes);
app.get("**", (req, res) => {
    res.status(404).send("404 Not found");
});
app.post("**", (req, res) => {
    res.status(404).send("404 Not found");
});
app.put("**", (req, res) => {
    res.status(404).send("404 Not found");
});
app.delete("**", (req, res) => {
    res.status(404).send("404 Not found");
});
httpApp.listen(process.env.PORT, "0.0.0.0", () => {
    console.log(`Server is listning at ${process.env.PORT}`);
});