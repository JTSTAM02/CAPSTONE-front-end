import Link from "next/link";
import React, { useState, useEffect } from 'react';
import Header from '/src/components/Header';
import LoggedInNavigation from "/src/components/LoggedInNavbar";
import axios from "axios";
import jwtDecode from 'jwt-decode';
import { useGlobalState } from "../context/GlobalState";
import { API_URL } from "../services/auth.constants";

function Profile() {
  const [watchList, setWatchList] = useState([]);
  const [movieToAdd, setMovieToAdd] = useState("");
  const [ratings, setRatings] = useState({});
  const [review, setReviews] = useState({});
  const [watchedMovies, setWatchedMovies] = useState({})
  const [movieReviews, setMovieReviews] = useState([]);
  const [comment, setComment] = useState([]);
  const { state, dispatch } = useGlobalState();

  //------------------------Axios Get Request Backend Database------------------------
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const url = `${API_URL}/get_watchlist/`;
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios.get(url, { headers })
      .then(response => {
        const watchlistData = response.data.watchlist;
        setWatchList(watchlistData);
      })
      .catch(error => {
        // Handle error
      });
  }, []);

  //------------------------Get User Data for Login------------------------
  useEffect(() => {
    const getUserFromLocalStorage = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = jwtDecode(userData);
        console.log('User data:', user);
        dispatch({
          type: 'SET_USER',
          payload: user
        });
      }
    };
    getUserFromLocalStorage();
  }, []);

  //--------------------------Work in Progress------------------------------
  // function removeFromWatchlist(movieId) {
  //   const token = localStorage.getItem('access_token');
  //   const url = 'http://127.0.0.1:8000/api/remove_from_watchlist/';
  //   const headers = {
  //     Authorization: `Bearer ${token}`,
  //   };

  //   axios
  //     .post(url, { movie_id: movieId }, { headers })
  //     .then(response => {
  //     })
  //     .catch(error => {
  //       // Handle errors
  //     });
  // }

  // const handleRatingChange = (movieTitle, newRating) => {
  //     setMovieReviews(prevRatings => ({
  //         ...prevRatings,
  //         [movieTitle]: {...prevRatings[movieTitle],
  //             rating: newRating,
  //         },
  //     }));
  // };

  // const handleWatchedChange = (movieTitle) => {
  //     setWatchedMovies(prevWatched => ({
  //         ...prevWatched,
  //         [movieTitle]: !prevWatched[movieTitle],
  //     }));
  //     setRatings((prevRatings) => ({
  //         ...prevRatings,
  //         [movieTitle]: 0,
  //       }));
  // };

  // const handleReviewChange = (movieTitle, newReview) => {
  //     setMovieReviews(prevReviews => ({
  //         ...prevReviews,
  //         [movieTitle]: {
  //             ...prevReviews[movieTitle],
  //             comment: newReview,
  //         },
  //     }));
  // };


  return (
    <div className="container-fluid text-center text-white">
      <div style={{
        backgroundImage: 'url("https://media.istockphoto.com/id/177274717/photo/abstract-multimedia-background-composed-of-many-images-with-copy.jpg?s=612x612&w=0&k=20&c=V0G4Z-glNKzuI1ZvQMObi3_0PuxUHOqzur7d5LXB29U=")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <div className="row">
          <div className="col-sm-4">
            <LoggedInNavigation />
            <h1 className="text-white text-center mt-5">My Watchlist</h1>

            <div className="watchlist">
              <ul className="movie-grid" style={{ marginTop: '10px' }}>
                {watchList.map(item => (
                  <li className="movie-item d-flex justify-content-center" key={item.id}>
                    <div className="list-item">
                      <div className="movie-content">{item.movie_title}
                        <div className="movie-image">
                          <img
                            src={item.movie_image}
                            alt={item.movie_title}
                            style={{ maxWidth: '200px', maxHeight: '250px' }}
                          />
                        </div>
                        <div className="movie-hover-content">
                          <p>Release Year: {item.movie_release_year}</p>
                          <p>User Rating: {item.movie_userRating}</p>
                          <a href={item.movie_trailerLink} target="_blank" rel="noopener noreferrer">
                            Trailer
                          </a>
                          {/* <button onClick={() => removeFromWatchlist(item.id)}>Remove from Watchlist</button> */}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

            </div>
          </div>
          <div className="col-sm-4"></div>
          <div className="col-sm-4 mt-5">
            <br></br><br></br><br></br>
            <br></br><br></br>
            <Link style={{fontSize: '30px'}} href="/form"><Header />Find Your Movie Here:</Link>

          </div>

          {/* ----------------------------Work In Progress--------------------------------------- */}
          {/* <div className="col-sm-4">
                    <div className="movie-tracker">
                        <h2>My Movie Tracker</h2>
                        <p>Track the movies you've watched and leave reviews</p>
                        <ul className="movie-list">
                            {watchList.map(movie => (
                                <li key={movie.title}>
                                    <div className="movie-entry">
                                        <div className="movie-title">{movie.title}</div>
                                            <label>
                                            Watched:
                                            <input
                                                type="checkbox"
                                                checked={watchedMovies[movie.title] || false}
                                                onChange={() => handleWatchedChange(movie.title)}
                                            />
                                        </label>
                                        {watchedMovies[movie.title] && (
                        <div>
                        <div className="rating">
                          <RatingStarsComponent
                            count={10}
                            size={35}
                            value={ratings[movie.title] || 0}
                            onChange={(newRating) => handleRatingChange(movie.title, newRating)}
                            emptyIcon={<i className="far fa-star"></i>}
                            fullIcon={<i className="fas fa-star"></i>}
                          />
                          <textarea
                                            className="review"
                                            placeholder="Leave a review..."
                                            value={review[movie.title] || ''}
                                            onChange={e =>
                                                handleReviewChange(movie.title, e.target.value)
                                            } />
                        </div>
                      </div>
                    )}
                                    </div>  
                                </li>
                            ))}
                        </ul>
 */}

          {/* <div>
       <form onSubmit={fetchDataToWatchlist}>
         <div>
           <label>Movie :</label>
           <input type="text" onChange={(e) => setMovieReviews(e.target.value)} />
         </div>
         <div>
           <label>Rating:</label>
           <input type="number" min="1" max="10" onChange={(e) => setRatings(e.target.value)} />
         </div>
         <div>
           <label>Comment:</label>
           <textarea onChange={(e) => setComment(e.target.value)} />
         </div>
         <button type="submit">Submit Review</button>
       </form>
    </div>
                    </div> 
                </div>*/}
        </div>
      </div>
      <style jsx>
        {`
.btn-custom {
    background-color: #1F5D57;
    color: #CBB26A;
  }

  .watchlist {
    text-align: center;
  }

  .movie-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    list-style: none;
    padding: 0;
    margin-top: 10px;
  }

  .movie-item {
    position: relative;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #1F5D57;
    text-align: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }

  .movie-item:hover {
    transform: translateY(-5px);
  }

  .movie-content {
    position: relative;
  }

.movie-card {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
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

  .movie-title {
    margin-bottom: 10px;
  }


                `}
      </style>
    </div>
  )
}

export default Profile