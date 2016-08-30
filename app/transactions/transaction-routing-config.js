TransactionRoutingConfig.$inject = ['$stateProvider'];

function TransactionRoutingConfig ($stateProvider) {

	$stateProvider
		.state('transaction-form', {
			url: '/transaction',
			template: '<transaction-form>'
		})
		.state('transactions', {
			url: '/',
			template: '<home-page>'
		});

 }

export default TransactionRoutingConfig;
