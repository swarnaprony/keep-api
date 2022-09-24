const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();

app.use(express.json());

// app.use(bodyParser.urlEncoded({
//     extended: true
// }));

mongoose.connect("mongodb+srv://admin-swarna:eENsnPzypRAZ0OlT@cluster0.alvs2jv.mongodb.net/KeepDB");

const noteSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Note = mongoose.model("Note", noteSchema);

app.route("/notes")

.post(function (req, res){
    console.log(req.body)
    const newNote = new Note({
        title: req.body.title,
        content: req.body.content
    });

    newNote.save(function(err){
        if(!err) {
            res.send(newNote);
        } else {
            res.send(err);
        }
    });

})


app.listen(3000, function(){
    console.log("Server started on port 3000")
});