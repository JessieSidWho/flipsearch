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
          if (isUser === true) console.log("Success!");
          else console.log("nope");
    });
});

router.get("/form", function(req, res){
  flipModel.all(function(data) {
    res.json(data);
  });
});

router.post("/form", function(req, res) {
  flipModel.create([
    "zip", "city", "rproperties", "cproperties", "avgyearbuilt", "avgsqft", "sales2019", "flippercent2019", "flippedhomes2019", "sales2018", "flippercent2018", "flippedhomes2018"
  ], [
    req.body.zip, req.body.city, req.body.rproperties, req.body.cproperties, req.body.avgyearbuilt, req.body.avgsqft, req.body.sales2019, req.body.flippercent2019, req.body.flippedhomes2019, req.body.sales2019, req.body.flippercent2019, req.body.flippedhomes2019 
  ], function(result) {
    console.log(result);
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