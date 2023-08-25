import Link from "next/link";
import React, { useState, useEffect } from 'react';
import Header from '/src/components/Header';
import LoggedInNavigation from "/src/components/LoggedInNavbar";
import RatingStarsComponent from 'react-rating-stars-component';
import axios from "axios";


function Page() {
    const [watchList, setWatchList] = useState([]);
    const [movieToAdd, setMovieToAdd] = useState("");
    const [ratings, setRatings] = useState({});
    const [review, setReviews] = useState({});
    const [watchedMovies, setWatchedMovies] = useState({})
    const [movieReviews, setMovieReviews] = useState([]);
    const [comment, setComment] = useState([]);



// -----------------------------Working for LocalStorage----------------------------------
    // useEffect(() => {
    //     const savedWatchList = localStorage.getItem("watchList");
    //     if (savedWatchList) {
    //         setWatchList(JSON.parse(savedWatchList));
    //     }
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem("watchList", JSON.stringify(watchList));
    // }, [watchList]);
    // const handleAddMovie = () => {
    //     if (movieToAdd.trim() === " ") return;

    //     if (watchList.some(movie => movie.title === movieToAdd)) {
    //         alert("Movie is already in the watchlist.");
    //         setMovieToAdd("");
    //         return;
    //     }
    //     const updatedWatchList = [...watchList, { title: movieToAdd }];
    //     setWatchList(updatedWatchList);
    //     localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
    //     setMovieToAdd("");
    // };
    

    const handleAddToWatchlist = () => {
        const movieId = movieToAdd.id; 
        axios.post('http://127.0.0.1:8000/add_to_watchlist/', { movie_id: movieId })
          .then(response => {
            alert(response.data.results);
          })
          .catch(error => {
            console.error('Error adding movie to watchlist:', error);
          });
      };

      useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/get_watchlist/')
          .then(response => {
            const watchlistData = response.data.watchlist;
            setWatchList(watchlistData);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

    const handleRemoveMovie = (title) => {
        const updatedWatchList = watchList.filter(movie => movie.title !== title);
        setWatchList(updatedWatchList);
    };

    const handleRatingChange = (movieTitle, newRating) => {
        setMovieReviews(prevRatings => ({
            ...prevRatings,
            [movieTitle]: {...prevRatings[movieTitle],
                rating: newRating,
            },
        }));
    };

    const handleWatchedChange = (movieTitle) => {
        setWatchedMovies(prevWatched => ({
            ...prevWatched,
            [movieTitle]: !prevWatched[movieTitle],
        }));
        setRatings((prevRatings) => ({
            ...prevRatings,
            [movieTitle]: 0,
          }));
    };

    const handleReviewChange = (movieTitle, newReview) => {
        setMovieReviews(prevReviews => ({
            ...prevReviews,
            [movieTitle]: {
                ...prevReviews[movieTitle],
                comment: newReview,
            },
        }));
    };

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
                       <div className="watchlist">
                            <h2 className="text-white">My Watchlist</h2>
                            <p>Got movies you want to remember for next time? Save them Here!</p>
                            <input
                                type="text"
                                placeholder="Enter movie title"
                                value={movieToAdd}
                                onChange={(e) => setMovieToAdd(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleAddToWatchlist(movieToAdd);
                                    }
                                }}
                            />
                            <button onClick={() => handleAddToWatchlist(movieToAdd)}>Add Movie</button>
                            <ul className="movie-list" style={{ marginTop: '10px' }}>
                                {watchList.map(movie => (
                                    <li key={movie.title}>
                                        <div className="list-item">
                                            {movie.title}
                                            <button onClick={() => handleRemoveMovie(movie.title)}>Remove</button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4">
                    <Header />
                        <Link href="/form">Find Your Movie Here:</Link>
     
                    </div>


            <div className="col-sm-4">
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


<div>
       <form onSubmit={handleAddToWatchlist}>
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
                </div>
            </div>
            </div>
            </div>
    )
}

export default Page