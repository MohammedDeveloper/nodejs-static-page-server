/**
 * NODE JS - Static Page Server
 */
var connect = require("connect");
var serveStatic = require("serve-static");
const port = 1234;

/**
 * Create the server
 * connect 3.x
 * Need to add serve-static
 */
var app = new connect();
app.use(serveStatic(__dirname));
app.listen(port)

/**
 * connect 2.x
 */
// connect.createServer(
//     connect.static(__dirname)
// ).listen(port);

/**
 * Log the o/p
 */
console.log("Server running at: http://localhost:" + port);
console.log("Home -  http://localhost:" + port);
console.log("About -  http://localhost:" + port + "/about.html");