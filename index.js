//var mysql = require('mysql');
const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
        res.end("1");
}).listen((err)=>{
    if(err)throw err;
    console.log('amit gamyak');
});
