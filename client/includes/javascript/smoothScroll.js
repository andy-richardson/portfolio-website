const $ = require('jquery');

module.exports = function(selector){
	$(selector).click(function(event) {
		event.preventDefault(event);
		console.log(event);

		const target = event.currentTarget.attributes.href.nodeValue;

		$('body,html').animate({
			 scrollTop: $(target).offset().top
		});
	});
}
