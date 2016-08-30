homeController.$inject = ['$scope'];

function homeController ($scope) {

	console.log('home-controller');

	var transactionsList = [];

	for (var i = 0; i < localStorage.length; i++) {
		var key = localStorage.key(i);
		var item = localStorage.getItem(key);
		var transaction = JSON.parse(item);
		transactionsList.push(transaction);
	}

	console.log(transactionsList);

	var transactions = {};

	for (var i = 0; i < transactionsList.length; i++) {

		console.log(transactionsList[i]);

	}



}

export default homeController;