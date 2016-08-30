import angular from '../bower_components/angular';
import '../bower_components/angular-ui-router/release/angular-ui-router';

angular.module('BudgetTracker', [
	'BudgetTracker.Utils',
	'Transactions',
	'Home'
]);

console.log('app init');
