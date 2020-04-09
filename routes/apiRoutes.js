const db = require('../models');
const axios = require('axios');
const mongoose = require('mongoose');

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
    app.get("/api/googlebooks/:title", (req, res) => {
        var title = req.params.title;
       axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title ).then(function (response) {
           console.log(response.data);
           
           res.json(response.data);
       } )
    })
    app.delete("/api/books/:id", (req, res) => {
        console.log(req.params.id);
        db.Book.findOneAndRemove({_id: mongoose.Types.ObjectId(req.params.id)}, function(err, data){
            res.json(data)
        });
    })
} 

module.exports = apiRoutes; 