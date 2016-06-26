const React = require('react');
const ReactDOM = require('react-dom');

class GithubComponent extends React.Component{
	constructor(){
		super();
		this.state = { data: ".." };
	}

	update(data){
		this.setState({data: data});
	}

	render(){
		return React.DOM.h4(null, this.state.data);
	}
}

module.exports = GithubComponent;
