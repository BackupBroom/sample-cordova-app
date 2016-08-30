import angular from '../../bower_components/angular';

LocalStorageService.$inject = ['IdGeneratorService'];

function LocalStorageService (IdGeneratorService) {

	const service = this;

	const prefix = 'BudgetApp';
	const ls = window.localStorage;

	service.get = get;
	service.set = set;

	service.item = {};

	service.item.get = getItem;
	service.item.post = postItem;
	service.item.put = putItem;
	service.item.delete = deleteItem;

	return service;



	function getId () {

		const id = get('latestId') || 0;

		return set('latestId', IdGeneratorService.createId(id));

	}



	function set (key, value) {

		ls.setItem(`${prefix}-${key}`, angular.toJson(value));

		return value;

	}



	function get (key) {

		return angular.fromJson(ls.getItem(`${prefix}-${key}`));

	}



	function getItem (collection, id) {

		return get(collection)
			.find(item => item.id === id);

	}



	function postItem (collection, item) {

		const items = get(collection) || [];

		set(
			collection,
			[
				...items,
				{ ...item, id: getId() }
			]
		);

		return get(collection);

	}



	function putItem (collection, id, newItem) {

		const items = get(collection);
		const oldItem = items.find(item => item.id === id);

		if (oldItem) {

			const itemIdx = items.indexOf(oldItem);

			set(
				collection,
				[
					...items.slice(0, itemIdx),
					newItem,
					...items.slice(itemIdx + 1, items.length)
				]
			);

		}

		return get(collection);

	}



	function deleteItem (collection, id) {

		const items = get(collection);
		const targetItem = items.find(item => item.id === id);
		const index = items.indexOf(targetItem);

		set(
			collection,
			[
				...items.slice(0, index),
				...items.slice(index + 1, items.length)
			]
		);

		return get(collection);

	}



}

export default LocalStorageService;

