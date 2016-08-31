import angular from '../bower_components/angular';
import '../bower_components/angular-ui-router/release/angular-ui-router';
import AppRun from './app-run.js';

angular
	.module('BudgetTracker', [
		'BudgetTracker.Utils',
		'Transactions',
		'Home'
	])
	.run(AppRun);

console.log('app init');
