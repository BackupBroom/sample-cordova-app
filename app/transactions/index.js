import angular from '../../bower_components/angular';
import TransactionRoutingConfig from './transaction-routing-config.js';
import TransactionFormComponent from './form/transaction-form-component.js';
import TransactionProvider from './transaction-provider.js';
import TransactionsService from './transactions-service.js';

angular
	.module('Transactions', [
		'ui.router',
		'BudgetTracker.Utils'
	])
	.component('transactionForm', TransactionFormComponent)
	.provider('TransactionProvider', TransactionProvider)
	.service('TransactionsService', TransactionsService)
	.config(TransactionRoutingConfig);
