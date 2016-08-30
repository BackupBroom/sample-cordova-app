import angular from '../../bower_components/angular';
import HomePageComponent from './home-component.js';
import HomeRoutingConfig from './home-routing-config.js';

angular
	.module('Home', [ 'ui.router', 'Transactions' ])
	.component('homePage', HomePageComponent)
	.config(HomeRoutingConfig);
