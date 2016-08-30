TransactionFormController.$inject = ['$state'];

function TransactionFormController ($state) {

	const vm = this;

	console.log('controller');

	vm.updateTransaction = updateTransaction;

	function updateTransaction () {

		$state.go('transactions');

	}

}

export default TransactionFormController;
