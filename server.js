const express = require('express');
const app = express();

const port = process.env.PORT || 3001;

const mongoose = require('mongoose');

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const routes = require("./routes/apiRoutes");

routes(app);
if (process.env.NODE_ENV === "production" ) {
    app.use(express.static("client/build"))
}
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/booksDB");

app.listen(port, function() {
    console.log("app is listening on http://localhost:" + port);
})

