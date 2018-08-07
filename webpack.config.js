const path = require('path');

module.exports = {
	mode: 'development',
	entry: "./src/index.js",
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	}
}