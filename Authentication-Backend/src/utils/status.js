const i18n = require("i18n");

class Status {

    static getSuccessStatus(description) {
        return ({
            code: 200,
            name: i18n.__("SUCCESS"),
            description: description
        })
    }

    static getErrorStatus(statusCode, description) {
        return ({
            code: statusCode,
            name: i18n.__("FAILED"),
            description: description
        })
    }
}

module.exports = Status;
