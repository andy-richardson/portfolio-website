const React = require('react');
const ReactDOM = require('react-dom');
const ApiRequester = require('./ApiRequester');
const GithubComponent = require('./GithubComponent');

module.exports = function(id){
	const repoCount = ReactDOM.render(React.createElement(GithubComponent), document.getElementById(id.repos));
	const followCount = ReactDOM.render(React.createElement(GithubComponent), document.getElementById(id.followers));
	const commitCount = ReactDOM.render(React.createElement(GithubComponent), document.getElementById(id.commits));

	new ApiRequester(10000, function(body){
		repoCount.update(body.public_repos);
		followCount.update(body.followers);
		commitCount.update(body.commits)
	});
};
