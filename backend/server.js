const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// In-memory storage for quick MVP
let books = [];
let id = 1;

// Add a book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: id++, title, author, status: 'reading', reviews: [] };
  books.push(newBook);
  res.json(newBook);
});

// List all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Add a review
app.post('/books/:id/review', (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).send('Book not found');
  const { review, rating } = req.body;
  book.reviews.push({ review, rating });
  book.status = 'finished';
  res.json(book);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
