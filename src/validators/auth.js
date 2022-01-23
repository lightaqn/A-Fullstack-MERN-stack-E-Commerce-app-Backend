const { check, validationResult } = require('express-validator');

exports.validateJoinRequest = [
    check('firstName')
    .notEmpty()
    .withMessage('Enter your firstName'),
    check('lastName')
    .notEmpty()
    .withMessage('Input your lastName'),
    check('lastName'),
    check('email')
    .isEmail()
    .withMessage('Valid email is dire to signup'),
    check('password')
    .isLength({ min: 6 })
    .withMessage('Sorry, Password must be atleast 6 character long')
];

exports.validateSigninRequest = [
    check('email')
    .isEmail()
    .withMessage('Operational email is needed'),
    check('password')
    .isLength({ min: 6 })
    .withMessage('Sorry, Password must be atleast 6 character long')
];

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(400).json({ error: errors.array()[0].msg })
    }
    next();
}

