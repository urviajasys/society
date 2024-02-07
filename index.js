const http = require('http');
const app = require('./app');
http.createServer((req,resp)=>{
    resp.writeHead(500,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(app));
    resp.end();
    }).listen(5000);