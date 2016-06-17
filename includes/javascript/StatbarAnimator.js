const $ = require('jquery');

const inView = function(element){
	var bottom = $(window).scrollTop() + $(window).height();
	return bottom > $(element).first().offset().top - 10;
}

module.exports = class StatbarAnimator {
	constructor(selector, widths){
		this.animated = false;
		this.selector = selector;
		this.widths = widths;

		// Ensure correct widths

		// Listen for animation opportunity
		const instance = this;
		$(window).on("load resize scroll", function(){
			if(!instance.animated && inView(instance.selector)){
				instance.animated = true;
				instance.animate();
			}
		});
	}

	animate(){
		const instance = this;
		$(this.selector).each(function(index){
			$(this).width(instance.widths[index]);
		});
	}
}
