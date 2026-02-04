const Book = require("../models/Book");

exports.createBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json(book);
};

exports.getBooks = async (req, res) => {
  const {
    search,
    author,
    from,
    to,
    page = 1,
    limit = 10,
    sortBy = "name",
    order = "asc",
  } = req.query;

  const query = {};

  if (search) {
    query.$text = { $search: search };
  }

  if (req.query.author) {
    filter.author = { $regex: req.query.author.trim(), $options: "i" };
  }

  if (from || to) {
    query.publishDate = {};
    if (from) query.publishDate.$gte = new Date(from);
    if (to) query.publishDate.$lte = new Date(to);
  }

  const sort = {
    [sortBy]: order === "desc" ? -1 : 1,
  };

  const books = await Book.find(query)
    .sort(sort)
    .skip((page - 1) * limit)
    .limit(Math.min(limit, 50));

  const total = await Book.countDocuments(query);

  res.json({
    page: Number(page),
    limit: Number(limit),
    total,
    data: books,
  });
};
