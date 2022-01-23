const express = require('express');
const { join, signin, signout } = require('../../controller/admin/auth');
const { validateJoinRequest, validateSigninRequest, isRequestValidated } = require('../../validators/auth');
const { requireSignin } = require('../../middleware');
const router = express.Router();

router.post(`/admin/join`, validateJoinRequest, isRequestValidated, join);
router.post(`/admin/signin`, validateSigninRequest, isRequestValidated, signin);
router.post(`/admin/signout`, signout);


module.exports = router;
