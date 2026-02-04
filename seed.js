require("dotenv").config();
const mongoose = require("mongoose");
const Book = require("./src/models/Book");

const books = [
  {
    name: "Clean Code",
    description: "A handbook of agile software craftsmanship",
    author: "Robert C. Martin",
    publishDate: "2008-08-01",
  },
  {
    name: "The Pragmatic Programmer",
    description: "Journey to mastery",
    author: "Andrew Hunt",
    publishDate: "1999-10-20",
  },
  {
    name: "Design Patterns",
    description: "Elements of reusable object-oriented software",
    author: "Erich Gamma",
    publishDate: "1994-10-31",
  },
  {
    name: "Refactoring",
    description:
      "Techniques for improving the structure of existing code without changing its behavior.",
    author: "Martin Fowler",
    publishDate: "2018-11-20",
  },
  {
    name: "System Design Interview",
    description:
      "Guide to designing scalable systems with real-world interview problems.",
    author: "Alex Xu",
    publishDate: "2020-06-01",
  },
  {
    name: "Domain-Driven Design",
    description: "Tactical and strategic design patterns for complex software",
    author: "Eric Evans",
    publishDate: "2003-08-30",
  },
  {
    name: "Working Effectively with Legacy Code",
    description: "Strategies for safely modifying legacy code",
    author: "Michael Feathers",
    publishDate: "2004-09-12",
  },
  {
    name: "Code Complete",
    description: "Practical handbook of software construction",
    author: "Steve McConnell",
    publishDate: "2004-06-19",
  },
  {
    name: "The Mythical Man-Month",
    description: "Essays on software engineering",
    author: "Frederick Brooks",
    publishDate: "1975-01-01",
  },
  {
    name: "Continuous Delivery",
    description: "Reliable software releases through automation",
    author: "Jez Humble",
    publishDate: "2010-07-27",
  },
  {
    name: "The Art of Computer Programming",
    description: "Comprehensive algorithms book",
    author: "Donald Knuth",
    publishDate: "1968-01-01",
  },
  {
    name: "Test-Driven Development",
    description: "By Example",
    author: "Kent Beck",
    publishDate: "2002-11-18",
  },
  {
    name: "Patterns of Enterprise Application Architecture",
    description: "Design patterns for enterprise applications",
    author: "Martin Fowler",
    publishDate: "2002-11-15",
  },
  {
    name: "Introduction to Algorithms",
    description: "Classic algorithms book",
    author: "Cormen et al.",
    publishDate: "1990-09-15",
  },
  {
    name: "Agile Software Development",
    description: "Principles, patterns, and practices",
    author: "Robert C. Martin",
    publishDate: "2002-03-01",
  },
];

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Atlas connected");
    await Book.insertMany(books);
    console.log("Books seeded");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
