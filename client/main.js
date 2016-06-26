const $ = require('jquery');
const tether = require('tether');
const calculateAge = require('./includes/javascript/ageCalculator');
const smoothScroll = require('./includes/javascript/smoothScroll');

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

// Update age
calculateAge(selector.age);

// Scroll animator
smoothScroll('.local-link');

// Form Validation
require('./includes/javascript/formSubmitListener');

// Dynamic Git Info
const githubRender = require('./includes/javascript/GithubRender');
githubRender(selector);
