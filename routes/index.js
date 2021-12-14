const router = require("express").Router();

const noteRoutes = require("./api/notes");

router.use("/api/notes", noteRoutes);

module.exports = router;
