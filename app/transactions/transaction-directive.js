function TransactionDirective () {

	return {
		restrict: 'E',
		templateUrl: 'transactions/transaction-directive.html',
		controller: TransactionDirectiveController,
		controllerAs: 'transaction',
		bindToController: true,
		scope: {
			data: '=',
			onEdit: '&',
			onDelete: '&'
		}
	};

}

function TransactionDirectiveController () {

	const vm = this;

	vm.controlsShown = false;
	vm.toggleControls = toggleControls;

	function toggleControls () {

		vm.controlsShown = !vm.controlsShown;

	}

}

export default TransactionDirective;
