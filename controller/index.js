require(`dotenv`).config();

const express = require(`express`);
const router = express.Router();

const keys = require(`../config/keys`);

let city="Berkeley";
let state="CA";
let zip="94703";
let lat="";
let lng=";"

router.get(`/`, (req, res) => {
    res.render(`index`, {
        google_api_key: keys.google.api,
        city,
        state,
        zip
    });
})

router.post(`/`, (req, res) => {
    city = req.body.city;
    state = req.body.state;
    zip = req.body.zip;

    // res.render(`index`, {
    //     google_api_key: keys.google.api,
    //     city,
    //     state,
    //     zip
    // });
    res.json({city, state, zip});
});

module.exports = router;