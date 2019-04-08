require(`dotenv`).config();

const express = require(`express`);
const router = express.Router();
const api_routes = require(`./api_routes`);
const keys = require(`../config/keys`);

router.use(`/api`, api_routes);

router.get(`/`, (req, res) => {
    res.render(`index`, {google_api_key: keys.google.api});
});

router.get(`/login`, (req, res) => {
    res.render(`login`);
});

module.exports = router;