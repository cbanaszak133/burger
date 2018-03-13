
var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/index", function(req, res){

	burger.selectAll(function(data){
		var newObj = {
			burger: data
		};

		console.log(newObj);

		res.render("index", newObj);
	});
});

router.post("/api/burgers", function(req, res){
	burger.insertOne([
		"burger_name", "devoured"
	], [
		req.body.burger_name, false
	], function (result){
		res.json({ id: result.insertId });
	});
});

router.put("/api/burgers/:id", function(req, res){
	var condition = "id = " + req.params.id;

	burger.updateOne({
		devoured: req.body.state
	}, condition, function(result){
		if (result.changedRows == 0) {
	      return res.status(404).end();
	    } else {
	      res.status(200).end();
	    }
	});
  });


module.exports = router;