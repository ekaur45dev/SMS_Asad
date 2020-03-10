const apiResponses = {};
apiResponses.createResponse=(data, message = "success", status = 200) => {
    return {
        status: status,
        message: message,
        data: data
    }
}
module.exports = apiResponses;