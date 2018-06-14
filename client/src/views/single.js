// Views Backbone
import Backbone from 'backbone'

// Collections
import Example from '../models/example'
import _ from 'underscore'

export const SingleView = Backbone.View.extend({
	model: new Example(),
	el: $('.examples-list'),
	initialize: function () {
		this.template = _.template($('.example-list-template').html())
	},
	render: function () {
		this.$el.html(this.template(this.model.toJSON()))
		return this;
	}
})

export default SingleView;
