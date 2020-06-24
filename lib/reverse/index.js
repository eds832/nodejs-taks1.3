'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});
var reverse = exports.reverse = function reverse() {
		return process.stdin.on('data', function (data) {
				console.log(Buffer.from(data.reverse()).toString('utf8'));
		});
};