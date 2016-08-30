import angular from '../../bower_components/angular';
import TransactionRoutingConfig from './transaction-routing-config.js';
import TransactionFormComponent from './form/transaction-form-component.js';

angular
	.module('Transactions', ['ui.router'])
	.component('transactionForm', TransactionFormComponent)
	.config(TransactionRoutingConfig);
