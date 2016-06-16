const $ = require('jquery');

module.exports = {
	center: function(selector, width){
		if($(window).width() < width){
			// Center image in mobile view only
			$(selector).addClass('center-block');
		}else{
			$(selector).removeClass('center-block');
		}
	}
}
