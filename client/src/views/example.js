// Views Backbone
import Backbone from 'backbone'
import _ from 'underscore'
import Example from '../models/example'
import exampletemplate from '../templates/example-template'
const ExampleView = Backbone.View.extend({
	model: new Example(),
	tagName: 'div',
	initialize: function () {
		this.template = _.template(exampletemplate)
	},
	events: {
		'click .edit-example': 'edit',
		'click .update-example': 'update',
		'click .cancel-example': 'cancel',
		'click .delete-example': 'delete',
	},
	edit: function () {
		this.$('.edit-example, .delete-example, .update-example, .cancel-example').toggleClass('d-none')

		const name = this.$('.name').html()

		this.$('.name').html(`<input type='text' class='form-control name-update' value='${name}' form="temp-form" />`)
	},
	update: function () {
		this.model.set({
			name: $('.name-update').val(),
		})
		this.model.save(null, {
			success: res => {
				console.log(`Successfully UPDATED example with _id: ${res.toJSON()._id}`)
			},
			error: res => {
				console.log('Failed to update example!')
			}
		})
	},
	cancel: function () {
		this.render()
	},
	delete: function () {
		this.model.destroy({
			success: res => {
				console.log(`Successfully DELETED example with _id: ${res.toJSON()._id}`)
			},
			error: () => {
				console.log('Failed to DELETE example')
			}
		})
	},

	render: function () {
		this.$el.html(this.template(this.model.toJSON()))
		return this;
	}
})

export default ExampleView;
