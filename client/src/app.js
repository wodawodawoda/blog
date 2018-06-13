// Models
import { Example } from './models/example'

// Views
import ExamplesView from './views/examples'

// Collections
import examples from './collections/examples'

const examplesView = new ExamplesView()

// DOM events handlers
$(document).ready(function () {
	$('.add-example').on('click', function (e) {
		console.log('elo')
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
