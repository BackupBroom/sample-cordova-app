TransactionFormController.$inject = ['$scope', '$state' ];

function TransactionFormController ($scope, $state) {

	console.log('controller');

	// var transactions = [];

	$scope.updateTransaction = function (transaction) {

		var transaction = {
			name: transaction.name,
			amount: transaction.amount,
			date: new Date()
		};

		transactions.push(transaction);

		$scope.transaction.name = '';
		$scope.transaction.amount = '';

		$state.go('transactions');

		localStorage.setItem('transaction', angular.toJson(transaction));

		// console.log(transactions);

	};

}

export default TransactionFormController;
