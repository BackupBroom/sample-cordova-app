TransactionsService.$inject = [
	'TransactionProvider',
	'LocalStorageService'
];

function TransactionsService (Transaction, LocalStorageService) {

	const service = this;

	service.createTransaction = createTransaction;
	service.getTransactions = getTransactions;
	service.deleteTransaction = deleteTransaction;

	return service;

	function createTransaction (name, amount) {

		const transaction = new Transaction(name, amount);

		console.log(transaction);

		LocalStorageService.item.post('/transactions', transaction);

	}



	function getTransactions () {

		return LocalStorageService.get('/transactions');

	}



	function deleteTransaction (transaction) {

		return LocalStorageService.item.delete('/transactions', transaction.id);

	}

}

export default TransactionsService;
