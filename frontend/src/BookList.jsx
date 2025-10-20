import { useState } from "react";

export default function BookList({ books, onAddReview }) {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} book={book} onAddReview={onAddReview} />
      ))}
    </div>
  );
}

function BookItem({ book, onAddReview }) {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!review) return;
    onAddReview(book.id, review, rating);
    setReview("");
    setRating(5);
  };

  return (
    <div style={{ border: "1px solid gray", padding: "1rem", marginBottom: "1rem" }}>
      <h3>{book.title} by {book.author}</h3>
      <p>Status: {book.status}</p>

      {book.reviews.length > 0 && (
        <div>
          <h4>Reviews:</h4>
          {book.reviews.map((r, i) => (
            <p key={i}>Rating: {r.rating} - {r.review}</p>
          ))}
        </div>
      )}

      {book.status === "reading" && (
        <form onSubmit={handleReviewSubmit}>
          <input
            placeholder="Write a review..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            style={{ marginRight: "0.5rem" }}
          />
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            style={{ width: "50px", marginRight: "0.5rem" }}
          />
          <button type="submit">Finish & Review</button>
        </form>
      )}
    </div>
  );
}
