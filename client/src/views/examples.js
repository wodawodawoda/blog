// Views Backbone
import Backbone from 'backbone'

// Collections
import examples from '../collections/examples'
import ExampleView from './example'

export const ExamplesView = Backbone.View.extend({
	model: examples,
	el: $('.examples-list'),
	initialize: function () {
		this.model.on('add', this.render, this);
		this.model.on('change', this.render, this);
		this.model.on('remove', this.render, this);

		this.model.fetch({
			success: res => {
				res.toJSON().forEach(item => console.log(`Successfully GET example with _id: ${item._id}`))
			},
			error: () => console.log('Failed to GET examples!')
		})
	},
	render: function () {
		this.$el.html('');
		this.model.toArray().forEach(blog => {
			this.$el.append(new ExampleView({model: blog}).render().$el)
		})
		return this;
	}
})

export default ExamplesView;
