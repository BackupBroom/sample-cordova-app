import angular from '../../bower_components/angular';
import TransactionRoutingConfig from './transaction-routing-config.js';

angular
	.module('Transactions', ['ui.router'])
	.config(TransactionRoutingConfig);
