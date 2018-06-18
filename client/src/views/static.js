// Views Backbone
import Backbone from 'backbone'

// Collections
import Example from '../models/example'
import _ from 'underscore'

import headertemplate from '../templates/header-template'

import MainView from './main'

export const HeaderView = Backbone.View.extend({
	remove: function() {
		this.$el.empty().off(); /* off to unbind the events */
		this.stopListening();
		return this;
	},
	name: 'HeaderView',
	el: $('.header'),
	dependencies: [MainView],
	initialize: function () {
		this.template = _.template(headertemplate)
	},
	render: function () {
		this.$el.html(this.template())
		return this;
	}
})

export default HeaderView;
