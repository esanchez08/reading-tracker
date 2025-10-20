import "./App.css";
import { useState, useEffect } from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: books.length + 1, status: "reading", reviews: [] }]);
  };

  const addReview = (id, review, rating) => {
    setBooks(
      books.map((b) =>
        b.id === id
          ? { ...b, status: "finished", reviews: [...b.reviews, { review, rating }] }
          : b
      )
    );
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>A Reader's Log</h1>
      <BookForm onAdd={addBook} />
      <BookList books={books} onAddReview={addReview} />
    </div>
  );
}

export default App;
