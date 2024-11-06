var mysql = require('mysql');
const http = require('http');
const fs = require('fs');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1357908642Aa?",
    database : "users_data"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
    k = 1;
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
        /*console.log(req);
        if(k == 0){
            con.query("CREATE TABLE users_data(ID varchar",(err,result)=>{
                if(err)throw err;
                console.log(result);            
            });
            k++;
        }
        res.end("3");
        */
    });
    server.listen(3000,'192.168.0.192',(err)=>{
        if(err)throw err;
        console.log('amit gamyak');
    });
    /*while(true){
        con.query("SHOW DATABASES;",(err,result)=>{
            if(err)throw err;
            console.log(result);            
        });
    }*/
});