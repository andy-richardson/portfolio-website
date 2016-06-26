const $ = require('jquery');

module.exports = function(selector){
	const birthday = new Date(1995, 02, 23);
	const today = new Date();
	const age = today.getFullYear() - birthday.getFullYear();
	$(selector).text(age);
};
