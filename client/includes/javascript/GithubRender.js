const React = require('react');
const ReactDOM = require('react-dom');
const RepoComponent = require('./RepoComponent.js');
const FollowComponent = require('./FollowComponent.js');
const CommitComponent = require('./CommitComponent.js');
// const rest = require('rest');

var x = 10;

const run = function(id, username){
	ReactDOM.render(React.createElement(RepoComponent, {username: username}), document.getElementById(id.repos));
	ReactDOM.render(React.createElement(FollowComponent, {username: username}), document.getElementById(id.followers));
	ReactDOM.render(React.createElement(CommitComponent, {username: username}), document.getElementById(id.commits));
}
//
// class GithubRender extends React.Component{
// 	constructor(id, username){
// 		super();
// 		this.repos = id.repos;
// 		this.commits = id.commits;
// 		this.followers = id.followers;
// 		this.username = username;
// 		this.vals = {};
// 	}
//
// 	start(){
//
// 	}
//
// 	updateRepos(){
// 		this.vals.repos = "hello";
// 	}
//
// 	updateCommits(){
//
// 	}
//
// 	renderRepos(){
// 		return React.DOM.h4(null, 10);
// 	}
//
// 	renderCommits(){
// 		return React.DOM.h4(null, this.dat.commits);
// 	}
//
// 	renderFollowers(){
// 		return React.DOM.h4(null, this.dat.followers)
// 	}
//
// 	render() {
// 		ReactDOM.render(
// 			React.createElement(RenderClass, { data: x })
// 			,document.getElementById(this.repos)
// 		);
// 		// ReactDOM.render(this.renderCommits(), document.getElementById(this.commits));
// 		// ReactDOM.render(this.renderFollowers(), document.getElementById(this.followers));
// 	}
// }

module.exports = run;
