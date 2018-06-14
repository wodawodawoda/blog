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
		const link = document.createElement('a')
		link.href = '#examples'
		link.innerText = 'Dawaj dalej'
		$(document.body).append(link);
	},

	examples: function () {
		this.view = new ExamplesView()
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
			})

	}
});


export default Router
