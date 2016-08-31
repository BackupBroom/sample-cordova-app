function TransactionProvider () {

	this.$get = () => Transaction;

}

function Transaction (config) {

	this.name = config.name;
	this.amount = config.amount;
	this.id = config.id;
	this.date = config.date || Date.now();

	return Object.freeze(this);

}

export default TransactionProvider;
