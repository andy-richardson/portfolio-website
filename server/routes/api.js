const express = require('express');
const router = express.Router();

const githubRouter = require('./github');
router.use('/github', githubRouter);

const mailRouter = require('./mail');
router.use('/mail', mailRouter);

module.exports = router;
