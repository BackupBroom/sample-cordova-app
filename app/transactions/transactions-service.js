TransactionsService.$inject = [
	'TransactionProvider',
	'LocalStorageService'
];

function TransactionsService (Transaction, LocalStorageService) {

	const service = this;

	service.createTransaction = createTransaction;
	service.getTransactions = getTransactions;
	service.deleteTransaction = deleteTransaction;
	service.editTransaction = editTransaction;

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



	function editTransaction (name, amount, id, date) {

		console.log(name, amount, id, date);

		const updatedTransaction = new Transaction(name, amount, id, date);

		return LocalStorageService.item
			.put('/transactions', id, updatedTransaction);

	}

}

export default TransactionsService;
