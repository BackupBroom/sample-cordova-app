import angular from '../../bower_components/angular';
import HomePageComponent from './home-component.js';

angular
	.module('Home', ['ui.router'])
	.component('homePage', HomePageComponent);
