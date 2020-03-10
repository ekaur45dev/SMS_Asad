const db = require('../../../config/database');
const accountRepo = {};
accountRepo.login = (data) => {
    
    return new Promise((resolve, reject) => {
        db.select('select * from list').then(suc => {
            resolve(suc)
        }).catch(err => {
            reject(err);
        });
    });
    //or simply return db.select('');
}
module.exports = accountRepo;