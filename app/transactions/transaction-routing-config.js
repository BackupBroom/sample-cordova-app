import TransactionFormController from './form/transaction-form-controller.js';
import homeController from '../home/home-controller.js';

TransactionRoutingConfig.$inject = ['$stateProvider'];

function TransactionRoutingConfig ($stateProvider) {

	$stateProvider
		.state('transaction-form', {
			url: '/transaction',
			templateUrl: '/transactions/form/transaction-form.html',
			controller: TransactionFormController,
			controllerAs: 'transactionForm'
		})
		.state('transactions', {
			url: '/',
			templateUrl: '/home/home.html',
			controller: homeController
		});

 }

export default TransactionRoutingConfig;
