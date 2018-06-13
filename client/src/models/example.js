// Backbone Models
import Backbone from 'backbone'

Backbone.Model.prototype.idAttribute = '_id';

export const Example = Backbone.Model.extend({
	default: {
		name: '',
	}
})
