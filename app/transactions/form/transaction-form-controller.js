TransactionFormController.$inject = [
	'$state',
	'$stateParams',
	'TransactionsService'
];

function TransactionFormController ($state, $stateParams, TransactionsService) {

	const vm = this;

	const transaction = $stateParams.transaction;

	if (null === transaction) {

		vm.name = '';
		vm.amount = '';
		vm.headerText = 'Add New';

	} else {

		vm.name = transaction.name;
		vm.amount = transaction.amount;
		vm.headerText = 'Edit';

	}

	vm.submitTransaction = submitTransaction;



	function submitTransaction () {

		if (transaction) {

			TransactionsService
				.editTransaction(vm.name, vm.amount, transaction.id, transaction.date);

		} else {

			TransactionsService.createTransaction(vm.name, vm.amount);

		}

		$state.go('transactions');

	}

}

export default TransactionFormController;
