const db = require('../models');

function apiRoutes (app) {
    app.get("/api/savedbooks", (req, res) => {
        db.Book.find({}).then(data => {
            res.json(data);
        })
    })
    app.post("/api/books", (req, res) => {
        db.Book.create(req.body).then(data => {
            res.json(data);
        })
    })
} 

module.exports = apiRoutes; 