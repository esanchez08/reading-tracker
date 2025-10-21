import { useState } from "react";

function BookForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !genre) return;
    onAdd({ title, author, genre });
    setTitle("");
    setAuthor("");
    setGenre("");
  };

  return (
    <div className="book-form-container">
      <form className="book-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <button type="submit" className="add-btn">+</button>
      </form>
    </div>
  );
}

export default BookForm;
