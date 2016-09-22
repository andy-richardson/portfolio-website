"use strict"
const request = require('request');
const gycon = require("github-yearly-contributions");

class GithubCommits{
	constructor(username, cacherate){
		this.username = username;
		this.cacherate = cacherate;
		this.cache = {};
	}

	startCaching(){
		this.updateCache();
		setInterval(() => {
			this.updateCache();
		}, this.cacherate);
	}

	updateCommits(){
		gycon("andyrichardson", (count) => {
				this.cache.commits = count
		});
	}

	updateUser(){
		const url="https://api.github.com/users/" + this.username;
		const opts = {
			url: url,
			timeout: 100000,
			headers: {
				'User-Agent': 'request'
			}
		};

		request(opts, (err, response, body) => {
			if (err) {
				this.cache.followers = 'error';
				console.log('caching error');
			}

			var result = JSON.parse(body)
			this.cache.followers = result.followers;
			this.cache.public_repos = result.public_repos;
		})
	}

	updateCache(){
		this.updateUser();
		this.updateCommits();
	}

	getCache(){
		return this.cache;
	}
}

module.exports = GithubCommits;
