const accountRepo = require("../../repositories/account/index");
const accountService = {};
accountService.login = (data) => {
    return new Promise((resolve, reject) => {
        accountRepo.login(data).then(suc => {
            resolve(suc);
        }).catch(err => {
            reject(err);
        });
    });
}
module.exports = accountService;