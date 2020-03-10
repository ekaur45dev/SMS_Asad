const apiRes = require("../../models/responses/api-response/index");
const accountService = require("../../services/account/index");
AccountController = {}
AccountController.login = async (req, res) => {
    accountService.login(req.body).then(suc => {
        res.status(200).send(apiRes.createResponse(suc));
    }).catch(err => {
        reject(err);
    });
    
}

module.exports = AccountController;