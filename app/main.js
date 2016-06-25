const $ = require('jquery');
const tether = require('tether');
const page = require('../includes/javascript/dynamicFunctions.js');
const smoothScroll = require('../includes/javascript/smoothScroll.js');

// Bootstrap Alpha requires forced dependencies
global.jQuery = $;
global.Tether = tether;
const bootstrap = require('bootstrap');

// Selectors & states
const selector = {
	age: "#age",
	repos: "react-repos",
	commits: "react-commits",
	followers: "react-follows"
};

// Initial configuration
page.displayAge(selector.age);
smoothScroll('.local-link');

// Form validation
require('../includes/javascript/formSubmitListener.js');

// Dynamic Git Info
const ReactDOM = require('react-dom');
const githubRender = require('../includes/javascript/GithubRender.js');
githubRender(selector, 'andyrichardson');
