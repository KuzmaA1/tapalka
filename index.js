//var mysql = require('mysql');
const https = require('https');
const fs = require('fs');

var options = {
    host: 'tapalka.onrender.com:3000',
    path: ''
}

https.createServer(options,(req,res)=>{
        Console.log(req);
}).listen(3000,(err)=>{
    if(err)throw err;
    console.log('amit gamyak');
});
