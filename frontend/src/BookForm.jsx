import { useState } from "react";

export default function BookForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;
    onAdd({ title, author });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: "0.5rem" }}
      />
      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{ marginRight: "0.5rem" }}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}
