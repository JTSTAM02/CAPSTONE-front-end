import React, { useState } from 'react';
import axios from 'axios';

function CommunityReviews({ reviews }) {
  const [movieId, setMovieId] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/add_review/', {
        movie_id: movieId,
        rating: rating,
        comment: comment
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error adding review');
    }
  };

  return (

    <div>
      <h2>Community Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>Movie: {review.movie}</p>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
          </li>
        ))}
      </ul>
    </div>


    // <div>
    //   <h2>Community Reviews</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>Movie :</label>
    //       <input type="text" value={movieId} onChange={(e) => setMovieId(e.target.value)} />
    //     </div>
    //     <div>
    //       <label>Rating:</label>
    //       <input type="number" min="1" max="10" value={rating} onChange={(e) => setRating(e.target.value)} />
    //     </div>
    //     <div>
    //       <label>Comment:</label>
    //       <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
    //     </div>
    //     <button type="submit">Submit Review</button>
    //   </form>
    //   {message && <p>{message}</p>}
    // </div>
  );
}

export default CommunityReviews;
