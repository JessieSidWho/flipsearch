const express = require(`express`);
const router = express.Router();

const orm = require(`../../config/orm`);
const flipModel = require("../../model/flip");

router.post('/login', (req, res) => {
    // console.log("hitting api login ");

    // console.log(req.body);

    const table = "users";
    const username = req.body.username;
    const password = req.body.password;

    orm.one( table, username, password, result => {
        if(result.length > 0) {
            res.end();
        } 
        else {
            console.log("nope");
        }
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