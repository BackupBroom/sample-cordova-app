function TransactionProvider () {

	this.$get = () => Transaction;

}

function Transaction (name, amount) {

	this.name = name;
	this.amount = amount;
	this.date = Date.now();

}

export default TransactionProvider;
