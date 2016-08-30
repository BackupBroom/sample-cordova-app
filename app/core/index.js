import angular from '../../bower_components/angular';
import LocalStorageService from './local-storage-service.js';

angular
	.module('BudgetTracker.Utils', [])
	.service('LocalStorageService', LocalStorageService);
