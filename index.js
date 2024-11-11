var mysql = require('mysql2');
const http = require('http');
const fs = require('fs');

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
con.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});
/*
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
*/
