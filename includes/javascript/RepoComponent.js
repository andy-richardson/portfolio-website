const React = require('react');
const ReactDOM = require('react-dom');

const rest = require('rest');
const mime = require('rest/interceptor/mime');
const client = rest.wrap(mime);

const api_root = "https://api.github.com/users/";

class RepoComponent extends React.Component{
	constructor(){
		super();
		this.state = { data: 10 }
	}

	componentDidMount(){
		this.updateState();

		setInterval(() => {
			this.updateState();
		}, 10000);
	}

	updateState(){
		client({path: api_root + this.props.username})
		.then((data) => {
			this.setState({data: data.entity.public_repos});
		})
	}

	render(){
		return React.DOM.h4(null, this.state.data);
	}
}

module.exports = RepoComponent;
