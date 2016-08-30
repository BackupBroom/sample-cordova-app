function IdGeneratorService () {

	const service = this;

	service.createId = id => id + 1;

	return service;

}

export default IdGeneratorService;
