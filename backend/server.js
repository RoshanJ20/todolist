const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const server = express();
server.use(bodyparser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lighter15',
    database: 'todolist'
  });
  
connection.connect((err) => {
    if(!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

server.listen(3000, () => console.log('Express server is running at port no : 3000'));