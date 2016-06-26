const request = require('request')

class ApiRequester{
	constructor(rate, callback){
		this.url = "https://andythedeveloper.com/api/github";
		this.callback = callback;
		this.rate = rate;
		this.start();
	}

	start(){
		this.update();
		setInterval(() => {
			this.update();
		}, this.rate);
	}

	update(){
		// use a timeout value of 10 seconds
		var opts = {
			url: this.url
		}

		request(opts, (err, res, body) => {
			if (err) {
				console.log(err)
				return;
			}

			var body = JSON.parse(body);
			this.callback(body)
		});
	}
}

module.exports = ApiRequester;
