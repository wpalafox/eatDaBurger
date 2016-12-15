var express = require("express");

var router = express.Router();
//We import the model (burger.js) to utilize its database functions
var burger = require("../models/burger.js");

// Create all our routes and set up appropriate logic within those routes 
router.get("/", function(req, res){
		res.redirect("/burgerz");
	});

router.get("/burgerz", function(req, res){
	burger.selectAll(function(data){
		var hbsObject = { burgers:data };
		res.render('index', hbsObject);



	});


});



router.post('/burgerz/add', function(req, res){
	burger.insertOne('burgerName', req.body.burgerName, function(){
			res.redirect("/burgerz");

	});

});

router.put('/burgerz/devour/:id', function (req, res){
	var condition = "id= " + req.params.id;

	console.log("condition", condition);

	burger.updateOne({ devoured: req.body.devoured }, condition, function() {
				res.redirect('/burgerz');

	});




	});


module.exports = router; 




