// Views Backbone
import Backbone from 'backbone'
import _ from 'underscore'
import { Example } from '../models/example'

const ExampleView = Backbone.View.extend({
	model: new Example(),
	tagName: 'tr',
	initialize: function () {
		console.log({self: this})
		this.template = _.template($('.example-list-template').html())
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
		console.log(this.model)
		this.model.save(null, {
			success: res => {
				console.log(`Successfully UPDATED example with _id: ${res.toJSON()._id}`)
			},
			error: res => {
				console.log('Failed to update example!')
				console.log(res)
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
