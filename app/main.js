const $ = require('jquery');
const tether = require('tether');
const page = require('../includes/dynamicFunctions.js');
const StatbarAnimator = require('../includes/StatbarAnimator.js');

// Bootstrap Alpha requires forced dependencies
global.jQuery = $;
global.Tether = tether;
const bootstrap = require('bootstrap');

// Selectors & states
const selector = {
	age: "#age",
	profileImage: "#profile-image",
	statbar: ".stats .stat-bar"
};

// Threshold for mobile with
const mobileThresh = 768;

// Initial configuration
page.displayAge(selector.age);
page.alignProfileImage(selector.profileImage, mobileThresh);
new StatbarAnimator(selector.statbar, ['80%', '95%', '70%', '100%']);
require('../includes/formSubmitListener.js');
require('../includes/scrollspyEmulator.js');
require('../includes/staticNavAnimator.js');

// Realign image upon page resize
$(window).resize(function(){
	page.alignProfileImage(selector.profileImage, mobileThresh)
});

// Temporary link click prevention
$('#rendo').click(function(evnt){
	evnt.preventDefault(evnt);
	alert('Apologies, due to lack of patenting, this project is currently confidential.');
})
