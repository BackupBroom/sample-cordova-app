HomeController.$inject = [ 'TransactionsService', '$stateParams', '$state' ];

function HomeController (TransactionsService, $stateParams, $state) {

	const vm = this;

	vm.transactions = TransactionsService.getTransactions();
	vm.deleteTransaction = deleteTransaction;
	vm.editTransaction = editTransaction;

	function deleteTransaction (transaction) {

		vm.transactions = TransactionsService.deleteTransaction(transaction);

	}



	function editTransaction (transaction) {

		$state.go('transaction-form', { transaction: transaction });

	}

}

export default HomeController;
