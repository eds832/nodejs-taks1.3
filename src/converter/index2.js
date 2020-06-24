import fs from 'fs';
import util from 'util';
import stream from 'stream';
import csv from 'csvtojson';

const csvFilePath = 'csv/nodejs-hw1-ex1.csv';
const jsonFilePath = 'json/json.txt';
const pipeline = util.promisify(stream.pipeline);

export const convertCsvToJson = () => {
	(async () => {
		await pipeline(
			fs.createReadStream(csvFilePath, "utf8"),
			csv(),
			fs.createWriteStream(jsonFilePath)
		);
		console.log('CSV successfully converted to JSON');
	})().catch(console.error);
}