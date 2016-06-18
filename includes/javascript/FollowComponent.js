const React = require('react');
const ReactDOM = require('react-dom');

const rest = require('rest');
const mime = require('rest/interceptor/mime');
const client = rest.wrap(mime);

const api_root = "https://api.github.com/users/";

class FollowComponent extends React.Component{
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
		client({path: api_root + this.props.username})
		.then((data) => {
			this.setState({data: data.entity.followers});
		});
	}

	render(){
		return React.DOM.h4(null, this.state.data);
	}
}

module.exports = FollowComponent;
