const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "validation failed",
                message: err.message,
                stackTrace: err.stackTrace,
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "unauthorized",
                message: err.message,
                stackTrace: err.stackTrace,
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "forbidden",
                message: err.message,
                stackTrace: err.stackTrace,
            });
            break;
        // case constants.SERVER_ERROR:
        //     res.json({
        //         title: "server failed",
        //         message: err.message,
        //         stackTrace: err.stackTrace,
        //     });
        //     break;

        case constants.NOT_FOUND:
            res.json({
                title: "not found",
                message: err.message,
                stackTrace: err.stackTrace,
            });
        default:
            console.log("no error");
            break;
    }
};

module.exports = errorHandler;
