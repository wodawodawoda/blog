// Views Backbone
import Backbone from 'backbone'


// Collections
import Example from '../models/example'
import _ from 'underscore'
import maintemplate from '../templates/main-template'
import ExamplesView from './examples'

export const MainView = Backbone.View.extend({
	dependencies: [],
	name: 'MainView',
	el: $('body'),
	initialize: function () {
		this.template = _.template(maintemplate)
	},
	render: function () {
		console.log('main render')
		this.$el.html(this.template())
		new ExamplesView().render()
		return this;
	}
})

export default MainView;
