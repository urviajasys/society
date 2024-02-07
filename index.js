// const http = require('http');
// const app = require('./app');
// http.createServer((req,resp)=>{
//     resp.writeHead(500,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify(app));
//     resp.end();
//     }).listen(5000);

const express = require('express');
const path = require('path');
const app = express();
const Dirpath = path.join(__dirname,'public');
 app.set('view engine','ejs');
// app.use(express.static(Dirpath));
app.get('/about',(req,resp)=>{
    // console.log(req.query);
resp.sendFile(`${Dirpath}/about.html`);
})

app.get('/profile',(req,resp)=>{
    const user = {
        name:'urvi',
        email:'urvi@gmail.com',
        skill:['php','java','jddd']

    }
    resp.render('profile',{user});
    })

    app.listen(5000)
    