const http = require('http');
/* This loads the http module. A constant is used as you don't expect the value of http to change.*/

const app = require('./app');

const port = process.env.PORT || 3000;//This uses the environment variable and sets the port, or hardcodes it as port 3000

const server = http.createServer(app);
/*This  creates a server. We will add something to it in order to handle incoming requests.
NOTE: The express application we created in app.js qualifies as a RequestHandler
*/

server.listen(port);//The server then starts listening on the specified port.