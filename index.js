//var mysql = require('mysql');
const https = require('https');
const fs = require('fs');

var options = {
    host: 'https://tapalka.onrender.com',
    port: '3000',
    path: ''
}

https.createServer(options,(req,res)=>{
        res.end("1");
}).listen(3000,(err)=>{
    if(err)throw err;
    console.log('amit gamyak');
});
