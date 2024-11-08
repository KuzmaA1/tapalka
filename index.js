var mysql = require('mysql');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
        if (req.method === 'POST') {
            let data = '';
            req.on('data', chunk => {
              data += chunk.toString();
            });
            req.on('end', () => {
              console.log('POST data:', data);
              res.end('Data received');
            });
          } else {
            res.end('Send a POST request to this endpoint');
          }
});
server.listen(3000,'192.168.0.192',(err)=>{
        if(err)throw err;
        console.log('amit gamyak');
});