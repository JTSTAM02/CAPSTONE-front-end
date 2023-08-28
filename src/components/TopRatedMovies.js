import React, { useState, useEffect } from 'react';
import axios from 'axios';
import authHeader from '../services/auth.headers';
import { useGlobalState } from '../context/GlobalState';


function TopRatedMovies() {
  const [topMovies, setTopMovies] = useState([]);
  const { state, dispatch } = useGlobalState();


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
    <div className='text-center'>
      <h2>Highest Rated Movies</h2>
      <ul className='movie-grid'>
        {topMovies.slice(1, 9).map(movie => (
          <li className='movie-item' key={movie._id}>
            <div className='movie-content text-center'>
              <img
                className='img-fluid'
                style={{ maxWidth: '150px', maxHeight: '200px' }}
                src={movie.primaryImage.url}
                alt={movie.titleText.text}
              />
              <h5>{movie.titleText.text}</h5>
            </div>
            <div className='movie-hover-content'>
              <p>Release Year: {movie.releaseYear.year}</p>
              <p>Current Rating by App Users: {movie.ratingsSummary.aggregateRating}</p>
              <button className="btn btn-custom" onClick={() => handleAddToWatchlist(movie)}>Add To Watchlist</button>
            </div>
          </li>
        ))}
      </ul>
      <style jsx>{`

    .btn-custom{
        background-color: #1F5D57;
        color: #CBB26A;
    }

    .movie-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: space-between;
        align-items: flex-start;
        gap: 10px;
    }

    .movie-item {
        flex: 0 1 calc(25% - 10px); /* Four items in a row, subtracting gap */
        background-color: black;
        border-radius: 5px;
        text-align: center;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
        transition: overflow 0.3s;
        position: relative;
        oveflow: hidden;
        heigt: 400px;
    }

      .movie-item:hover .movie-hover-content {
          display: block;
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

      .movie-item img {
          margin-bottom: 10px;
          width: 100%;
          height: 200px;
          max-height: 200px;
      }

  
        /* Media Queries for Responsiveness

        @media (max-width: 950px) {
          .movie-item {
            width: 25%;
          }

        @media (max-width: 393px) {
          .movie-item h5 {
            font-size: 4vw;
          }
        }

        @media (max-width: 950px) {
          .movie-grid {
            justify-content: center;
          }
        
        .movie-item {
          flex: 0 1 calc(33.33% - 10px); /* Three items in a row, subtracting gap */
          }
        }

        @media (min-height: 851px) and (max-height: 1000px) {
          .movie-item {
            flex: unset; /* Unset the flex property */
            width: 100%; /* Reset the width to occupy full container width */
          }
        }

      `}
    </style>
    </div>
  );
}

export default TopRatedMovies;
