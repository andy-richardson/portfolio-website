"use strict"
const request = require('request');

class GithubCommits{
	constructor(username, cacherate){
		this.username = username;
		this.cacherate = cacherate;
	}

	startCaching(){
		this.updateCache();
		setInterval(() => {
			this.updateCache();
		}, this.cacherate);
	}

	updateCache(){
		const url = "http://github.com/" + this.username;
		const opts = {
			url: url,
			timeout: 100000
		}

		request(opts, (err, response, body) => {
			if (err) {
				this.result = 'error';
				console.log('Caching error');
			}

			// Get contribution count
			let split = body.split(" ");
			let index = split.indexOf('contributions') - 1;
			this.result = split[index];
		});
	}

	getResult(){
		return this.result;
	}
}

module.exports = GithubCommits;
