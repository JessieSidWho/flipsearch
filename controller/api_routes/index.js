const express = require(`express`);
const router = express.Router();

const orm = require(`../../config/orm`);

router.post('/login', (req, res) => {

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

module.exports = router;