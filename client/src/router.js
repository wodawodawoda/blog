import Backbone from 'backbone'
import ExamplesView from './views/examples'

import SingleView from './views/single'
import _ from 'underscore'

import Example from './models/example'
import HeaderView from './views/static'
import MainView from './views/main'

// Backbone.Router.prototype.before = function () {};
// Backbone.Router.prototype.after = function () {};

// Backbone.Router.prototype.route = function (route, name, callback) {
// 	if (!_.isRegExp(route)) route = this._routeToRegExp(route);
// 	if (_.isFunction(name)) {
// 		callback = name;
// 		name = '';
// 	}
// 	if (!callback) callback = this[name];
//
// 	var router = this;
//
// 	Backbone.history.route(route, function(fragment) {
// 		var args = router._extractParameters(route, fragment);
//
// 		router.before.apply(router, arguments);
// 		callback && callback.apply(router, args);
// 		router.after.apply(router, arguments);
//
// 		router.trigger.apply(router, ['route:' + name].concat(args));
// 		router.trigger('route', name, args);
// 		Backbone.history.trigger('route', router, name, args);
// 	});
// 	return this;
// };


const RouterTwo = Backbone.Router.extend({
	routes: {
		'': 'index',
		'header': 'header',
		'examples': 'examples',
		'examples/:id': 'example',
		// '*home': 'index',
	},

	// Track all rendered views at the time
	activeViews: {},


	initialize: function () {
		this.on('route', function (routeEvent) {
			console.log('zmiana route')
			console.log(routeEvent)
			console.log(Backbone.history.getFragment())
		})
	},


	index: function () {
		this.goBack(MainView)
	},


	header: function () {
		this.goBack(HeaderView, '.examples-list')
		// this.remove('header')
	},

	examples: function () {
		// new ExamplesView().render()
		this.goBack(ExamplesView, '.examples-list')
	},

	example: function (id) {
		const newModel = new Example({_id: id})
		newModel.fetch()
			.then(res => {
				const newSingle = new SingleView({
					model: newModel
				}).render()
				// Hide preview button
				$('.preview-example').addClass('d-none')
				$('.return-example').removeClass('d-none')
			})

	},

	/*
	 * param 'toRender': element to be rendered
	 * param 'el': HTML element in which 'toRender' element will be rendered
	 */
	goBack: function(toRender, el) {
		// 'toRender' element name
		const name = toRender.prototype.name
		// Check if any unneeded element or dependency is rendered on site
		Object.keys(this.activeViews).forEach(view => {
			// Search for already rendered toRender element && its dependencies
			if (view !== name && !toRender.prototype.dependencies.find(dep => {
					return dep.prototype.name === view
				})) {
				// Remove founded element from DOM
				this.activeViews[view].remove()
				// Remove founded element from 'activeElement' object
				delete this.activeViews[view]
			}
		})
		// If toRender element is not rendered, run add() to render element
		if(!this.activeViews[name]) {
			this.add(toRender, '', el)
		}
	},

	add: function(view, name, el) {
		// Check for element name
		name = name || view.prototype.name
		// Instance new view
		const mod = new view()
		// Check new view dependencies
		if(mod.dependencies) {
			mod.dependencies.forEach(dep => {
				// If dependency is already rendered return
				if(this.activeViews[dep.prototype.name]) return
				// Instance new dependency element
				const newDep = new dep()
				// Add newly rendered element to activeViews object
				this.activeViews[dep.prototype.name] = newDep
				newDep.render()
			})
		}
		// If 'el' parameter is specified push it to view instance
		if(el) {
			mod.$el.push(document.querySelector(el))
			mod.el = document.querySelector(el)
		}
		// Add view instance to 'activeViews' object
		this.activeViews[name] = mod
		// Render view
		mod.render()
	},

	// Remove view
	remove: function(name) {
		this.activeViews[name].remove()
		delete this.activeViews[name]
	},

});

export default RouterTwo
