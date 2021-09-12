const express = require('express');
const router = express.Router();
const linkRouter = require('./link/link.router');

router.use('/',linkRouter);

module.exports = router;