HomeController.$inject = ['TransactionsService'];

function HomeController (TransactionsService) {

	const vm = this;

	vm.transactions = TransactionsService.getTransactions();
	vm.deleteTransaction = deleteTransaction;

	function deleteTransaction (transaction) {

		vm.transactions = TransactionsService.deleteTransaction(transaction);

	}

}

export default HomeController;
