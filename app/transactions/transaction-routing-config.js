TransactionRoutingConfig.$inject = ['$stateProvider'];

function TransactionRoutingConfig ($stateProvider) {

	$stateProvider
		.state('transaction-form', {
			url: '/transaction',
			template: '<transaction-form>',
			params: { transaction: null }
		});

 }

export default TransactionRoutingConfig;
