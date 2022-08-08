const restify       = require('restify');
const sConfig       = require('./config/server.config')

/**
* Initialize Server
*/
const server = restify.createServer({
    name    : sConfig.name,
    version : sConfig.version,
    url     : sConfig.hostname
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


/* Set my App routes */
require('./routes/employee.routes')(server);

server.get('/', function(req, res){
    res.send('Welcome to UNES X Node.js X Restify');
});

server.listen(3005 , function () {
  console.log('%s Listening at %s', server.name , server.url);
});