const express = require('express');
const { join, signin } = require('../controller/auth');
const { validateJoinRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');
const router = express.Router();

router.post(`/join`, validateJoinRequest, isRequestValidated, join);
router.post(`/signin`, validateSigninRequest, isRequestValidated, signin);

// router.post(`/profile`, requireSignin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// });


module.exports = router;
