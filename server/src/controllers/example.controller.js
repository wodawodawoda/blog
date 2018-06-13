import Example from '../models/example';

export function getExamples(req, res) {
	console.log('Received GET request')
	Example.find((err, docs) => {
		if (err) {
			res.status(500).send(err);
		}
		res.send(docs);
	});
}

export function addExample(req, res) {
	console.log(`Received POST`)
	const newExample = new Example(req.body);
	console.log(req.body)
	newExample.save((err, docs) => {
		if(err) res.status(500).send(err);
		res.send(docs)
	})
}
