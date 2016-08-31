HomeController.$inject = [ 'TransactionsService', '$stateParams', '$state' ];

function HomeController (TransactionsService, $stateParams, $state) {

	const vm = this;

	vm.transactions = TransactionsService.getTransactions();
	vm.deleteTransaction = deleteTransaction;
	vm.editTransaction = editTransaction;
	vm.createTransaction = createTransaction;

	function deleteTransaction (transaction) {

		vm.transactions = TransactionsService.deleteTransaction(transaction);

	}



	function editTransaction (transaction) {

		$state.go('transaction-form', { transaction: transaction });

	}



	function createTransaction () {

		$state.go('transaction-form');

	}

}

export default HomeController;
