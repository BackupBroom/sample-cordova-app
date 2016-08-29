import TransactionFormController from './form/transaction-form-controller.js';

TransactionRoutingConfig.$inject = ['$stateProvider'];

function TransactionRoutingConfig ($stateProvider) {

	$stateProvider
		.state('transaction-form', {
			url: '/transaction',
			templateUrl: '/transactions/form/transaction-form.html',
			controller: TransactionFormController
		});

 }

export default TransactionRoutingConfig;
