const express = require("express");
const router = express.Router();

// Import the model 
const flipModel = require("../models/flip");

// Routes
router.get("/", function(req, res) {
  flipModel.all(function(data) {
    let hbsObject = {
      CityDataByZip: data
    };
    console.log(hbsObject)
    res.render("index", hbsObject);
  });
});

router.get("/api", function(req, res){
  flipModel.all(function(data) {
    res.json(data);
  });
});

router.post("/api/flips", function(req, res) {
  console.log(req.body);
  flipModel.create([
    "city", "state", "zip", "flip"
  ], [
    req.body.city, req.body.state, req.body.zip, req.body.flip
  ], function(result) {
    res.json({id: result.insertId});
  });
});

router.put("/api/flips/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("Condition: ", condition);

  flipModel.update({
    
  },condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/flips/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  flipModel.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;