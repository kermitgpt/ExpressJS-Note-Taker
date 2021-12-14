const express = require("express");
const router = require("./routes");
const path = require("path");

const app = express();
const PORT = 3001;

//Middleware
app.use(express.static("public"));
app.use(express.json());

//API Routes
app.use(router);

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
