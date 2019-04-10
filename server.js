const express = require(`express`);
const app = express();

const PORT = process.env.PORT || 3000;

const controller = require("./controller");
const exphbs = require("express-handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(`/static`, express.static("public"));
app.use(controller);
// app.use(express.static.path.join((__dirname + '/public/assets/images/')));


app.listen(PORT, function() {
    console.log("App now listening at http://localhost:" + PORT);
});
  