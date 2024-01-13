const { validationResult } = require('express-validator');

exports.ractifyError = (req, res, next) => {

    const error = validationResult(req);
    if (!error.isEmpty()) {
        req.errorStatus = 422; // 422 Unprocessable Entity
        next(new Error(error.array()[0].msg)); // to global error method
    } else {
        next(); // to next middleware
    }
}