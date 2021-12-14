const router = require("express").Router();
const { json } = require("express/lib/response");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

router.get("/", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    res.json(JSON.parse(data));
  });
});

router.post("/", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    const notesArr = JSON.parse(data);
    console.log(req.body);
    const newNote = { ...req.body };
    console.log(newNote);
    newNote.id = uuidv4();
    notesArr.push(newNote);
    fs.writeFile("./db/db.json", JSON.stringify(notesArr), (err) => {
      console.log(err);
      res.json(newNote);
    });
  });
});

module.exports = router;
//Use fs.readFile to read data
//Once data is read, parse data
//Add new note to parsed data
//Use fs.writeFile to rewrite the stringified notes
//Respond with new note
