// Views Backbone
import Backbone from 'backbone'

// Collections
import exampleInstance from '../collections/examples'
import ExampleView from './example'
import MainView from './main'

export const ExamplesView = Backbone.View.extend({
	remove: function() {
		this.$el.empty().off(); /* off to unbind the events */
		this.stopListening();
		return this;
	},
	dependencies: [MainView],
	model: exampleInstance,
	el: $('.examples-list'),
	initialize: function () {
		this.model.on('add', this.render, this);
		this.model.on('change', this.render, this);
		this.model.on('remove', this.render, this);

		this.model.fetch({
			success: res => {
				res.toJSON().forEach(item => console.log(`Successfully GET example with _id: ${item._id}`))
			},
			error: (col, err, op) => {
				console.log('Failed to GET examples!')
				console.log({col,err,op})
			}
		})
	},
	render: function () {
		this.$el.html('');
		this.model.toArray().forEach(blog => {
			// console.log(model)
			this.$el.append(new ExampleView({model: blog}).render().$el)
		})
		return this;
	}
})

export default ExamplesView;
