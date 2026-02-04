Books API — Node.js Interview Task

A minimal Books API built using Node.js, Express, and MongoDB (Atlas or Local).
This project demonstrates clean backend structure, database integration, filtering, searching, pagination, sorting, and seeding — suitable for technical interviews.

Tech Stack-->
Node.js
Express.js
MongoDB (Local or MongoDB Atlas)
Mongoose
dotenv
=============
data model-->
{
  "name": "string (required)",
  "description": "string (required, ~2000 chars)",
  "author": "string (required)",
  "publishDate": "ISO date"
}

===
books-api/
src/app.js 

src/config/db.js

src/models/Book.js

src/routes/books.js

 seed.js
.env
 package.json
