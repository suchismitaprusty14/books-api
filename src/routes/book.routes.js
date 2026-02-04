const express = require("express");
const { createBook, getBooks } = require("../controllers/book.controller");

const router = express.Router();

router.post("/", createBook);
router.get("/", getBooks);

module.exports = router;
