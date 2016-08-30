import angular from '../../bower_components/angular';

TransactionsService.$inject = ['TransactionProvider'];

function TransactionsService (Transaction) {

	const service = this;

	service.createTransaction = createTransaction;

	return service;

	function createTransaction (name, amount) {

		const transaction = new Transaction(name, amount);

		console.log(transaction);
		localStorage.setItem('transaction', angular.toJson(transaction));

	}

}

export default TransactionsService;
