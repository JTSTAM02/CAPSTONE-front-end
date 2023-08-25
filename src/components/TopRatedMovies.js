import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TopRatedMovies() {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    fetchTopMovies();
  }, []);

  function fetchTopMovies() {
    axios
      .get('http://localhost:8000/api/get_top_movies/')
      .then(response => {
        const results = response.data.results;
        setTopMovies(results);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div className='top-rated-movies text-center'>
      <h2>Highest Rated Movies</h2>
      <ul className='movie-grid'>
        {topMovies.slice(1, 9).map(movie => (
          <li className='movie-item' key={movie._id}>
            <div className='movie-content'>
              <img
                className='img-fluid'
                style={{ maxWidth: '200px', maxHeight: '200px' }}
                src={movie.primaryImage.url}
                alt={movie.titleText.text}
              />
              <h5>{movie.titleText.text}</h5>
            </div>
            <div className='movie-hover-content'>
              <p>Release Year: {movie.releaseYear.year}</p>
              <p>Current Rating by App Users: {movie.ratingsSummary.aggregateRating}</p>
            </div>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .top-rated-movies {
        }

        .movie-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .movie-item {
          position: relative;
          border: 10px solid transparent;
          padding: 0px;
          background-color: black;
          border-radius: 5px;
          text-align: center;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
        }

        .movie-content {
          position: relative;
        }

        .movie-hover-content {
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 10px;
          border-radius: 5px;
          box-sizing: border-box;
          transition: opacity 0.3s;
        }

        .movie-item:hover .movie-hover-content {
          display: block;
        }

        .movie-item img {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}

export default TopRatedMovies;
