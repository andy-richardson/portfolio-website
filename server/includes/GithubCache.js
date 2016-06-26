"use strict"
const request = require('request');

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
		const url = "http://github.com/" + this.username;
		const opts = {
			url: url,
			timeout: 100000
		};

		request(opts, (err, response, body) => {
			if (err) {
				this.commits.cache = 'error';
				console.log('Caching error');
			}

			// Get contribution count
			let split = body.split(" ");
			let index = split.indexOf('contributions') - 1;
			this.cache.commits = split[index];
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
