import Backbone from 'backbone'
import ExamplesView from './views/examples'

import SingleView from './views/single'

import Example from './models/example'

const Router = Backbone.Router.extend({
	routes: {
		'': 'index',
		'examples': 'examples',
		'examples/:id': 'example',
	},

	index: function () {
		this.view = new ExamplesView()
		this.view.render()
	},
	examples: function () {
		console.log('elo')
	},

	example: function (id) {
		const newModel = new Example({_id: id})
		newModel.fetch()
			.then(res => {
				const newSingle = new SingleView({
					model: newModel,
					_id: id
				}).render()
				// Hide preview button
				$('.preview-example').addClass('d-none')
				$('.return-example').removeClass('d-none')
			})

	}
});


export default Router
