const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '13456789',
    database: 'twitter',
});

conn.connect(function(err) {
    if(err) throw err;
    else {
        console.log("DB Connected");
    }
})
module.exports = conn;