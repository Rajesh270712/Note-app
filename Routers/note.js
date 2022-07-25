const express = require("express");
const createNote = require("../handlers/note");

const noteRouter = express.Router();


noteRouter.post("/note/create",createNote)

module.exports = noteRouter;