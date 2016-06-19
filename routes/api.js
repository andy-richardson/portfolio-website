const express = require('express');
const GithubCommits = require('../includes/GithubCommits');
const router = express.Router();

const commit = new GithubCommits('andyrichardson', 60000 * 30);
commit.startCaching();

router.route('/github/commits')
.get(function(req, res, end){
	const result = commit.getResult();
	console.log(result);

	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify({ result: result}));
});

module.exports = router;
