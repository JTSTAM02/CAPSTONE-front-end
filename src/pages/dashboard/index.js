import Link from "next/link";
import React, { useState, useEffect } from 'react'
import Header from '../../components/Header';
import Navigation from "../../components/Navigation";

function StarRating({ value, onChange }) {
    const stars = Array.from({ length: 5 }, (_, index) => index + 1);

    return (
        <div className="star-rating">
            {stars.map(starValue => (
                <input
                    key={starValue}
                    type="radio"
                    name="rating"
                    value={starValue}
                    checked={starValue === value}
                    onChange={() => onChange(starValue)}
                />
            ))}
            {stars.map(starValue => (
                <label key={starValue}>{starValue}</label>
            ))}
        </div>
    );
}

function Page() {
    const [watchList, setWatchList] = useState([]);
    const [movieToAdd, setMovieToAdd] = useState("");
    const [ratings, setRatings] = useState({});
    const [review, setReviews] = useState({});
    const [watchedMovies, setWatchedMovies] = useState({})

    useEffect(() => {
        const savedWatchList = localStorage.getItem("watchList");
        if (savedWatchList) {
            setWatchList(JSON.parse(savedWatchList));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("watchList", JSON.stringify(watchList));
    }, [watchList]);

    const handleAddMovie = () => {
        if (movieToAdd.trim() === " ") return;

        if (watchList.some(movie => movie.title === movieToAdd)) {
            alert("Movie is already in the watchlist.");
            setMovieToAdd("");
            return;
        }

        setWatchList([...watchList, { title: movieToAdd }]);
        setMovieToAdd("");
    };

    const handleRemoveMovie = (title) => {
        const updatedWatchList = watchList.filter(movie => movie.title !== title);
        setWatchList(updatedWatchList);
    };

    const handleRatingChange = (movieTitle, newRating) => {
        setRatings(prevRatings => ({
            ...prevRatings,
            [movieTitle]: newRating
        }));
    };

    const handleWatchedChange = (movieTitle) => {
        setWatchedMovies(prevWatched => ({
            ...prevWatched,
            [movieTitle]: !prevWatched[movieTitle],
        }));
    };
    const handleReviewChange = (movieTitle, newReview) => {
        setReviews(prevReviews => ({
            ...prevReviews,
            [movieTitle]: newReview,
        }));
    };


    return (
        <div className="container text-center text-white">
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
                        <Navigation />
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
                                        handleAddMovie();
                                    }
                                }}
                            />
                            <button onClick={handleAddMovie}>Add Movie</button>
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
                        <h2 className="text-white">My Movie Tracker</h2>
                        <p>Track the movies you've watched and leave reviews</p>
                        <ul className="movie-list">
                            {watchList.map(movie => (
                                <li key={movie.title}>
                                    <div className="movie-entry">
                                        <div className="movie-title">{movie.title}</div>
                                        <div className="rating">
                                            <StarRating
                                                value={ratings[movie.title] || 0}
                                                onChange={newRating => handleRatingChange(movie.title, newRating)}
                                            />
                                        </div>
                                        <textarea
                                            className="review"
                                            placeholder="Leave a review..."
                                            value={review[movie.title] || ''}
                                            onChange={e =>
                                                handleReviewChange(movie.title, e.target.value)
                                            } />
                                        <label>
                                            Watched:
                                            <input
                                                type="checkbox"
                                                checked={watchedMovies[movie.title] || false}
                                                onChange={() => handleWatchedChange(movie.title)}
                                            />
                                        </label>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            </div>
    )
}

export default Page