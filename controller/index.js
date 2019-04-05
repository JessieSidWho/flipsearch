require(`dotenv`).config();

const express = require(`express`);
const router = express.Router();

const keys = require(`../config/keys`);

router.get(`/`, (req, res) => {
    res.render(`index`, {google_api_key: keys.google.api});
})


module.exports = router;