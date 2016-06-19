const browserify = require('browserify');
const sass = require('node-sass');
var path = require('path');
const fs = require('fs');

const js_compiler = browserify();
const bundle_js = fs.createWriteStream(path.join(__dirname, '../public/res/js/bundle.js'));
const bundle_css = fs.createWriteStream(path.join(__dirname, '../public/res/css/bundle.css'));

// Compile Javascript
js_compiler.add(path.join(__dirname, '/app/main.js'));
js_compiler.bundle().pipe(bundle_js);
console.log('Javascript compilation complete');

// Compile sass
sass.render({
	file: path.join(__dirname, '/app/main.scss'),
	outputStyle: 'compressed'
}, function(err, data){
	if(err){
		return console.log('Error compiling sass: ' + err);
	}

	bundle_css.write(data.css);
	console.log('CSS compilation complete');
});
