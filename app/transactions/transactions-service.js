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

	function createTransaction (obj) {

		const transaction = new Transaction(obj);

		console.log(transaction);

		LocalStorageService.item.post('/transactions', transaction);

	}



	function getTransactions () {

		return LocalStorageService.get('/transactions')
			.map(obj => new Transaction(obj));

	}



	function deleteTransaction (transaction) {

		return LocalStorageService.item.delete('/transactions', transaction.id);

	}



	function editTransaction (obj) {

		console.log(obj);

		const updatedTransaction = new Transaction(obj);

		console.log('UpdatedTransaction: ', updatedTransaction);

		return LocalStorageService.item
			.put('/transactions', updatedTransaction.id, updatedTransaction);

	}

}

export default TransactionsService;
