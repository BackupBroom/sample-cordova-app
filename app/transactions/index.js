import angular from "../../bower_components/angular";
import TransactionRoutingConfig from "./transaction-routing-config.js";

(function(){
	angular
		.module('Transactions', ['ui.router'])
		.config(TransactionRoutingConfig);
})();