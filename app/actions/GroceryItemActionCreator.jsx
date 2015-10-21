var dispatcher = require('./../dispatcher.js');

module.exports = {
	add:function(item) {
		dispatcher.dispatch({
			type:"GROCERY-ITEM:ADD",
			payload:item
		})
	},

	delete: function(item) {
		dispatcher.dispatch({
			type:"GROCERY-ITEM:DELETE",
			payload:item
		})
	},

	buy: function(item) {
		dispatcher.dispatch({
			type:"GROCERY-ITEM:BUY",
			payload: item
		})
	},

	unbuy: function(item) {
		dispatcher.dispatch({
			type:"GROCERY-ITEM:UNBUY",
			payload: item			
		})
	}
}