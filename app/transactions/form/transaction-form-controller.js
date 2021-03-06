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

	} else {

		vm.name = transaction.name;
		vm.amount = transaction.amount;
		vm.editing = true;

	}

	vm.submitTransaction = submitTransaction;



	function submitTransaction () {

		if (transaction) {

			TransactionsService
				.editTransaction({
					name: vm.name,
					amount: vm.amount,
					id: transaction.id,
					date: transaction.date
				});

		} else {

			TransactionsService.createTransaction({
				name: vm.name,
				amount: vm.amount
			});

		}

		$state.go('transactions');

	}

}

export default TransactionFormController;
