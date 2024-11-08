//var mysql = require('mysql');
const https = require('https');
const fs = require('fs');

var options = {
    host: 'tapalka.onrender.com:3000',
    path: ''
}

https.createServer(options,(req,res)=>{
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
}).listen(3000,(err)=>{
    if(err)throw err;
    console.log('amit gamyak');
});
