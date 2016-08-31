AppRun.$inject = ['$state'];

function AppRun ($state) {

	$state.go('transactions');

}

export default AppRun;
