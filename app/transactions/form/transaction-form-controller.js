TransactionFormController.$inject = [ '$state', 'TransactionsService' ];

function TransactionFormController ($state, TransactionsService) {

	const vm = this;

	vm.name = '';
	vm.amount = '';

	console.log('controller');

	vm.createTransaction = createTransaction;

	function createTransaction () {

		TransactionsService.createTransaction(vm.name, vm.amount);

		$state.go('transactions');

	}

}

export default TransactionFormController;
