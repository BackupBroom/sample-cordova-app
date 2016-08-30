function TransactionProvider () {

	this.$get = () => Transaction;

}

function Transaction (name, amount) {

	this.name = name;
	this.amount = amount;

}

export default TransactionProvider;
