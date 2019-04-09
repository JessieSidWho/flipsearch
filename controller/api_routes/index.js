const express = require(`express`);
const router = express.Router();

const userModel = require(`../../model/users`);
const flipModel = require("../../model/flip");

router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    userModel.all( result => {
      let isUser = false;
      for (i in result) {
        if (result[i].username === username
          && result[i].password === password) {
            isUser = true;
            res.end();
          }
      }
      if (isUser) console.log("Success!");
      else console.log("nope");
    });
});


// Routes
router.get("/form", function(req, res) {
  flipModel.all(function(data) {
    let hbsObject = {
      CityDataByZip: data
    };
    console.log(hbsObject)
    res.render("form", hbsObject);
  });
});

router.get("/", function(req, res){
  flipModel.all(function(data) {
    res.json(data);
  });
});

router.post("/form", function(req, res) {
  console.log(req.body);
  flipModel.create([
    "city", "state", "zip", "flip"
  ], [
    req.body.city, req.body.state, req.body.zip, req.body.flip
  ], function(result) {
    res.json({id: result.insertId});
  });
});

router.put("/form/:id", function(req, res) {
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

router.delete("/form/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  flipModel.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;