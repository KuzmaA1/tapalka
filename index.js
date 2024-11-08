//var mysql = require('mysql');
const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
        console.log(req.method);
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
}).listen(port,(err)=>{
        if(err)throw err;
        console.log('amit gamyak');
});
