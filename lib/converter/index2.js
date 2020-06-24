'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.convertCsvToJson = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _stream = require('stream');

var _stream2 = _interopRequireDefault(_stream);

var _csvtojson = require('csvtojson');

var _csvtojson2 = _interopRequireDefault(_csvtojson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var csvFilePath = 'csv/nodejs-hw1-ex1.csv';
var jsonFilePath = 'json/json.txt';
var pipeline = _util2.default.promisify(_stream2.default.pipeline);

var convertCsvToJson = exports.convertCsvToJson = function convertCsvToJson() {
	(async function () {
		await pipeline(_fs2.default.createReadStream(csvFilePath, "utf8"), (0, _csvtojson2.default)(), _fs2.default.createWriteStream(jsonFilePath));
		console.log('CSV successfully converted to JSON');
	})().catch(console.error);
};