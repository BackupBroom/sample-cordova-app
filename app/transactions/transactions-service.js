import angular from '../../bower_components/angular';

TransactionsService.$inject = ['TransactionProvider', 'LocalStorageService'];

function TransactionsService (Transaction, LocalStorageService) {

	const service = this;

	service.createTransaction = createTransaction;

	console.log(LocalStorageService);

	debugger;

	return service;

	function createTransaction (name, amount) {

		const transaction = new Transaction(name, amount);

		console.log(transaction);
		localStorage.setItem('transaction', angular.toJson(transaction));

	}

}

export default TransactionsService;
