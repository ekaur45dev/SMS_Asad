const server = require('./config/server.js');
const httpApp = require("http").createServer(server);
const PORT = process.env.PORT || 5000;
httpApp.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is listning at ${PORT}`);
});