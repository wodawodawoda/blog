// Backbone Models
import Backbone from 'backbone'

Backbone.Model.prototype.idAttribute = '_id';

const Example = Backbone.Model.extend({
	urlRoot: 'api/examples',
	default: {
		name: '',
	}
})
export default Example;
