HomeRoutingConfig.$inject = ['$stateProvider'];

function HomeRoutingConfig ($stateProvider) {

	$stateProvider
		.state('transactions', {
			url: '/',
			template: '<home-page>'
		});

 }

export default HomeRoutingConfig;
