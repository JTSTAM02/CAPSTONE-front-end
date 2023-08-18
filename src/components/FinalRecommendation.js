import React from 'react';

const FinalRecommendation = ({ recommendedMovie }) => {
  return (
    <div>
      <h2>Your Recommended Movie:</h2>
      <p>Title: {recommendedMovie.title}</p>
      <p>Genre: {recommendedMovie.genre}</p>
      {/* Include other movie data here */}
    </div>
  );
};

export default FinalRecommendation;