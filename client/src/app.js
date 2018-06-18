import Backbone from 'backbone'

// Models
import Example from './models/example'

// Views
import ExamplesView from './views/examples'

// Collections
import exampleInstance from './collections/examples'


import Router from './router'

const router = new Router();

router.on('route', function () {
	// console.log('nosiema')
})
// const examplesView = new ExamplesView()

// DOM events handlers
$(document).ready(function () {
	Backbone.history.start();
	$('.add-example').on('click', function (e) {
		e.preventDefault()
		const example = new Example({
			name: $('.name-input').val(),
		})

		example.save(null, {
			success: res => {
				console.log(res.toJSON())
				exampleInstance.add(res.toJSON())
			},
			error: () => {
				console.log('Failed to save blog!')
			}
		})

	})
})
