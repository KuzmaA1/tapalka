//var mysql = require('mysql');
const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
        Console.log(1);
        res.end("1");
}).listen(3000,(err)=>{
    if(err)throw err;
    console.log('amit gamyak');
});
