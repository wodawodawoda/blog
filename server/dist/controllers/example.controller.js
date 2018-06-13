'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getExamples = getExamples;
exports.addExample = addExample;

var _example = require('../models/example');

var _example2 = _interopRequireDefault(_example);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getExamples(req, res) {
	console.log('Received GET request');
	_example2.default.find(function (err, docs) {
		if (err) {
			res.status(500).send(err);
		}
		res.send(docs);
	});
}

function addExample(req, res) {
	console.log('Received POST');
	var newExample = new _example2.default(req.body);
	console.log(req.body);
	newExample.save(function (err, docs) {
		if (err) res.status(500).send(err);
		res.send(docs);
	});
}