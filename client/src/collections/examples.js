// Backbone Collections
import Backbone from 'backbone'

const Examples = Backbone.Collection.extend({
	// comparator: 'name',
	url: 'http://localhost:3000/api/examples'
});

const exampleInstance = new Examples();

export default exampleInstance;
