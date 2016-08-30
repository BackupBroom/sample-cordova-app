import homeController from '../home/home-controller.js';

TransactionRoutingConfig.$inject = ['$stateProvider'];

function TransactionRoutingConfig ($stateProvider) {

	$stateProvider
		.state('transaction-form', {
			url: '/transaction',
			template: '<transaction-form>'
		})
		.state('transactions', {
			url: '/',
			templateUrl: '/home/home.html',
			controller: homeController
		});

 }

export default TransactionRoutingConfig;
