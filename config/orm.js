var connection = require("./connection.js");


// Question Mark function that adheres to SQL syntax
/*
function printQuestionMarks(num){
	var arr = [];

	for(var i =0; i < num; i++){
		arr.push("?");

	}

	return arr.toString();


}  */

// Helper function for SQL syntax.


function objToSql(ob) {
	// column1=value, column2=value2,...
	var arr = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			return key + '=' + ob[key];
		}
	}

}


var orm = {  

		selectAll: function(tableInput, cb) {
			var queryString = "SELECT * FROM "+ tableInput + ";";
			connection.query(queryString, function(err, res){
				if(err) {
					throw err;
				}
				cb(res);
				
			});  
			


			},
			//vals is an array of value we will save to cols
			// cols are where we will insert the vals 

		insertOne: function (table, cols, vals, cb){
			var queryString = "INSERT INTO " + table;

			queryString += " (";
			queryString += cols.toString();
			queryString += ") ";
			queryString +='VALUES (';
			queryString += '?';
			queryString += ") ";

			console.log(queryString); 

			connection.query(queryString, vals, function(err, res) {
		      if (err) {
		        throw err;
		      }
		      cb(res);
		    });


		},

		//An example of objColVals {name: dog, hungry: true}
		updateOne: function(table, objColVal, condition, cb){
			var queryString = "UPDATE " + table;

			queryString += " SET ";
			queryString += objToSql(objColVal);
			queryString += " Where ";
			queryString += condition;

			console.log(queryString);
			connection.query(queryString, function(err, result){
				if (err) {
					throw err;
				}


				cb(result);

			});
		}, 



};




module.exports = orm;
