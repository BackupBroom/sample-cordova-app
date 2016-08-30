import angular from '../../bower_components/angular';
import LocalStorageService from './local-storage-service.js';
import IdGeneratorService from './id-generator-service.js';

angular
	.module('BudgetTracker.Utils', [])
	.service('LocalStorageService', LocalStorageService)
	.service('IdGeneratorService', IdGeneratorService);
