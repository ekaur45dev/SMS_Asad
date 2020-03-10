'user strict'
const mysql = require("mysql");

const database = {};
connection=function(){
    //return mysql.createPool({
    //    host: process.env.DB_HOST,
    //    user: process.env.DB_USER,
    //    password: process.env.DB_PASSWORD,
    //    database: process.env.DB_DATABASE
    //});
    return mysql.createPool({
        host: "localhost",
        user: "root",
        password: "AiseyKaise?",
        database: "school_management_system"
    });
}
database.select = (query) => {
    return new Promise((resolve, reject) => {
        
        connection().query(query, (err, suc) => {
            if (err) reject(err)
            else {
                if ((query + "").trim().toLowerCase().startsWith("call"))
                    resolve(suc[0])
                else
                    resolve(suc);
            };
        });
    });
}
database.insertUpdateDelete = (query) => {
    return new Promise((resolve, reject) => {
        connection().query(query, (err, suc) => {
            if (err) reject(err)
            else resolve(suc.effectedRows);
        });
    });
}
module.exports = database;