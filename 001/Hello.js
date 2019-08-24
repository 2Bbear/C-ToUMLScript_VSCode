var http = require('http');

http.createServer(function (request, response){
    response.writeHead(200, { 'conent-type' : 'text/html'});
    response.wrtie('Hello World !!');
    response.end();

}).listen(8889);

console.log('this is my code');