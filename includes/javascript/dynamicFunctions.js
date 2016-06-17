const $ = require('jquery');
var exports = module.exports = {};

exports.alignProfileImage = function(selector, width){
	if($(window).width() < width){
		// Center image in mobile view only
		$(selector).addClass('center-block');
	}else{
		$(selector).removeClass('center-block');
	}
}

exports.displayAge = function(selector){
	const birthday = new Date(1995, 02, 23);
	const today = new Date();
	const age = today.getFullYear() - birthday.getFullYear();
	$(selector).text(age);
}
