TransactionsService.$inject = [
	'TransactionProvider',
	'LocalStorageService'
];

function TransactionsService (Transaction, LocalStorageService) {

	const service = this;

	service.createTransaction = createTransaction;

	return service;

	function createTransaction (name, amount) {

		const transaction = new Transaction(name, amount);

		console.log(transaction);

		LocalStorageService.item.post('/transactions', transaction);

	}

}

export default TransactionsService;
