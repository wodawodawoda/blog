import Backbone from 'backbone'

// Models
import { Example } from './models/example'

// Views
import ExamplesView from './views/examples'

// Collections
import examples from './collections/examples'


import Router from './router'
const router = new Router();

// const examplesView = new ExamplesView()

// DOM events handlers
$(document).ready(function () {
	Backbone.history.start();
	$('.add-example').on('click', function (e) {
		e.preventDefault()
		const example = new Example({
			name: $('.name-input').val(),
		})
		examples.add(example)

		example.save(null, {
			success: res => {
				console.log(`Successfully saved blog with _id: ${res.toJSON()._id}!`)
			},
			error: () => {
				console.log('Failed to save blog!')
			}
		})
	})
})
