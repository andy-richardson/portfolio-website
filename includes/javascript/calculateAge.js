const $ = require('jquery');

module.exports = {
	get: function(){
		// Calculate age
		const birthday = new Date(1995, 02, 23);
		const today = new Date();
		return today.getFullYear() - birthday.getFullYear();
	}
}
