import "./App.css";
import { useState, useEffect } from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";
import logo from "./assests/ARLlogo.svg"

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
      <img src={logo} alt="Logo" classname="App-logo" />
      <BookForm onAdd={addBook} />
      <BookList books={books} onAddReview={addReview} />
    </div>
  );
}

export default App;
