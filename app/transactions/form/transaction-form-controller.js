TransactionFormController.$inject = ['$scope', '$state' ];

function TransactionFormController ($scope, $state) {

	console.log('controller');

	var transactions = [];

	$scope.updateTransaction = function () {

		var transaction = {
			name: $scope.transaction.name,
			amount: $scope.transaction.amount,
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
