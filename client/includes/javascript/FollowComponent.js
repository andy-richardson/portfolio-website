const React = require('react');
const ReactDOM = require('react-dom');

class GithubComponent extends React.Component{
	constructor(){
		super();
		this.state = ".."
	}

	updateState(data){
		this.setState(data);
	}

	render(){
		return React.DOM.h4(null, this.state);
	}
}

module.exports = GithubComponent;
