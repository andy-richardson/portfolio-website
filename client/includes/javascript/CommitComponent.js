const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

const rest = require('rest');
const mime = require('rest/interceptor/mime');
const client = rest.wrap(mime);

const api_root = "https://andythedeveloper.com/api/github/commits";

class CommitComponent extends React.Component{
	constructor(){
		super();
		this.state = { data: ".." }
	}

	componentDidMount(){
		this.updateState();

		setInterval(() => {
			this.updateState();
		}, 20000);
	}

	updateState(){
		var request = require('request')

		// use a timeout value of 10 seconds
		var timeoutInMilliseconds = 30*1000
		var opts = {
			url: api_root,
			timeout: timeoutInMilliseconds
		}

		request(opts, (err, res, body) => {
			if (err) {
				console.log(err)
				return
			}

			var body = JSON.parse(body);
			this.setState({data: body.result});
		});
	}

	render(){
		return React.DOM.h4(null, this.state.data);
	}
}

module.exports = CommitComponent;
