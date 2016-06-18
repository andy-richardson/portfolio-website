const browserify = require('browserify');
const sass = require('node-sass')
const fs = require('fs');

const js_compiler = browserify();
const bundle_js = fs.createWriteStream('./res/js/bundle.js');
const bundle_css = fs.createWriteStream('./res/css/bundle.css');

// Compile Javascript
js_compiler.add('./app/main.js');
js_compiler.bundle().pipe(bundle_js);
console.log('Javascript compilation complete');

// Compile sass
sass.render({
	file: 'app/main.scss',
	outputStyle: 'compressed'
}, function(err, data){
	if(err){
		return console.log('Error compiling sass: ' + err);
	}

	bundle_css.write(data.css);
	console.log('CSS compilation complete');
})
