//Import the orm we built so we can create a function that will talk to the mySQL database
var orm = require("../config/orm.js");


var burger = {
	selectAll: function(cb){
	  orm.selectAll('burgerz', function(res){
	  	cb(res);
	  });

	},  
	//The variables cols and vals are arrays
	insertOne: function(cols, vals, cb){
		orm.insertOne('burgerz', cols, vals, function(res){
			cb(res);

		});

	},

	updateOne: function(objColVal, condition, cb){
		orm.updateOne('burgerz', objColVal, condition, function (res){

			cb(res); 
		
		});
	},  
};




module.exports = burger;










