require(`dotenv`).config();

const express = require(`express`);
const router = express.Router();
const api_routes = require(`./api_routes`);
const keys = require(`../config/keys`);

let city="Berkeley";
let state="CA";
let zip="94703";
let lat="";
let lng="";

router.get(`/main`, (req, res) => {
    res.render(`index`, {
        google_api_key: keys.google.api,
        city,
        state,
        zip
    });
})

router.post(`/main`, (req, res) => {
    city = req.body.city;
    state = req.body.state;
    zip = req.body.zip;

    res.json({city, state, zip});
});

router.get(`/`, (req, res) => {
    res.render(`login`);
});

router.get(`/form`, (req, res) => {
    res.render(`form`);

});

router.use(`/api`, api_routes);

module.exports = router;