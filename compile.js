const browserify = require('browserify');
const sass = require('node-sass');
var path = require('path');
const fs = require('fs');

const js_compiler = browserify();
const bundle_js = fs.createWriteStream(path.join(__dirname, 'server/public/res/js/bundle.js'));
const bundle_css = fs.createWriteStream(path.join(__dirname, 'server/public/res/css/bundle.css'));

// Compile Javascript
js_compiler.transform("babelify", {presets: [["es2015", "react"]]});
js_compiler.transform({global: true}, 'uglifyify');
js_compiler.add(path.join(__dirname, '/client/main.js'));
js_compiler.bundle(function(err){
	if(err){
		return console.log(err);
	}
	console.log('Javascript compilation complete');
}).pipe(bundle_js);

// Compile sass
sass.render({
	file: path.join(__dirname, '/client/main.scss'),
	outputStyle: 'compressed'
}, function(err, data){
	if(err){
		return console.log('Error compiling sass: ' + err);
	}

	bundle_css.write(data.css, function(){
		console.log('CSS compilation complete');
	});
});
