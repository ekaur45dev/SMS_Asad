const express = require("express");
const bodyParser = require("body-parser");
const server = express();

server.use(bodyParser.json());

const path = require("path");
const routes = require("./routes/index");
require("dotenv").config();
server.use("/", express.static("Angular8/dist/"));
server.use("/public", express.static("public"));
server.use("/assets", express.static("public/assets"));
server.use("/api", routes);
server.get("**", (req, res) => {
    res.status(404).send("404 Not found");
});
server.post("**", (req, res) => {
    res.status(404).send("404 Not found");
});
server.put("**", (req, res) => {
    res.status(404).send("404 Not found");
});
server.delete("**", (req, res) => {
    res.status(404).send("404 Not found");
});
module.exports = server;