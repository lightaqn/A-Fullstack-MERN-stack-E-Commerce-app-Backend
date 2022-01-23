const express = require('express');
const {  requireSignin, adminMiddleware } = require('../../middleware');
const { createPage, getPage } = require('../../controller/admin/page');
const router = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.post(`./page/create`, requireSignin, adminMiddleware, upload.array([
    { name: 'banners' },
    { name: 'products' }
]), createPage)

router.get(`/page/:category/:type`, getPage);

module.exports = router;