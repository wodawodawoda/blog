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
	console.log(req)
	const newExample = new Example(req.body);
	console.log(req.body)
	newExample.save((err, docs) => {
		if(err) res.status(500).send(err);
		res.send(docs)
	})
}

export function updateExample(req, res) {
	console.log(`Received PUT`)
	Example.update(
		{_id: req.params.id},
		req.body,
		err => res.send({_id: req.params.id})
	)
}

export function deleteExample(req, res) {
	console.log(`Received DELETE`)
	Example.remove(
		{_id: req.params.id},
		err => res.send({_id: req.params.id})
	)
}
