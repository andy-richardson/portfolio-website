const express = require('express');
const router = express.Router();

const GithubCache = require('../includes/GithubCache');
const cache = new GithubCache('andyrichardson', 60000 * 30);
cache.startCaching();

router.route('/')
.get(function(req, res, end){
	res.end(JSON.stringify(cache.getCache()));
});

module.exports = router;
