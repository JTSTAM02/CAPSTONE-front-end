import React, { useEffect, useState } from 'react';
import TopRatedMovies from '/src/components/TopRatedMovies';
import CommunityReviews from '/src/components/CommunityReviews';
import LoggedInNavigation from '/src/components/LoggedInNavbar';
import MovieMixerLogo from "/src/images/MovieMixerLogo.png";
import Link from "next/link";
import Image from 'next/image';





function Dashboard() {
  //----------------------------------Community Reviews Upcoming-------------------------------------------------------------------------------------
    // const [communityReviews, setCommunityReviews] = useState([]);

    // useEffect(() => {
    //     fetchCommunityReviews();
    //   }, []);

    //   const fetchCommunityReviews = async () => {
    //     try {
    //       const response = await axios.get('/api/get_community_reviews');
    //       setCommunityReviews(response.data.reviews);
    //     } catch (error) {
    //       console.error('Error fetching community reviews:', error);
    //     }
    //   };


    return (
        <div className='container-fluid text-center bg-cover .vh-100' style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80")',
          // backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfUQqtN62oKB4gl6rzhNfOqwxX-Q74bUxZ0oTopsz1CM0DkLk0RhBlOYKbvGsGA4ojN0&usqp=CAU")',
          // backgroundImage: 'url("https://t4.ftcdn.net/jpg/02/71/50/69/360_F_271506927_WWFfd92jDIIDx6DgMflakU14o5jRPgBm.jpg")',
            // backgroundImage: 'url("https://st.depositphotos.com/1007879/3004/v/450/depositphotos_30049933-stock-illustration-blank-photo-video-template.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',          
            }}>
          <LoggedInNavigation />

                <h1 className='text-center text-white'>Movie Mixer Community</h1>
        <div className='dashboard-content text-white'>
        <div className='row'>
            <div className='col'>
            <TopRatedMovies />
            </div>
            <div className='col d-flex flex-column align-items-center'>
            <div className="logo-container">
        <Image className="img-fluid"
            src={MovieMixerLogo}
            alt="MovieMixer Logo"
            width={300}
            height={300} />

    </div>
            <div className='form-link'>
              <Link
              href='/form'>Find Your Movie Here!</Link>
                {/* <CommunityReviews reviews={communityReviews}/> */}
                </div>
            </div>
        </div>
        </div>
        <style jsx>{`

.logo-container {
  margin-top: 53px;
  margin-left: 80px;
  margin-bottom: 20px;
}     

.container-fluid {
  margin-top: 50px;
  margin-bottom: 20px;
}
      .form-link {
        margin-left: 80px;
        font-size: 40px;
        color: white;
        text-decoration: underline;
        transition: color 0.3s;
      }
      .form-link:hover {
        color: #CBB26A;
      }
    `}</style>
        </div>
    );
}

export default Dashboard;


// import React, { useState, useEffect } from 'react';
// import Header from '../../components/Header';
// import Navigation from "../../components/Navigation";

// function StarRating({ value, onChange }) {
//     const stars = Array.from({ length: 10 }, (_, index) => index + 1);

//     return (
//         <div className="star-rating">
//             {stars.map(starValue => (
//                 <input
//                     key={starValue}
//                     type="radio"
//                     name="rating"
//                     value={starValue}
//                     checked={starValue === value}
//                     onChange={() => onChange(starValue)}
//                 />
//             ))}
//             {stars.map(starValue => (
//                 <label key={starValue}>{starValue}</label>
//             ))}
//         </div>
//     );
// }

// function Page() {
//     const [watchList, setWatchList] = useState([]);
//     const [movieToAdd, setMovieToAdd] = useState("");
//     const [ratings, setRatings] = useState({});
//     const [review, setReviews] = useState({});
//     const [watchedMovies, setWatchedMovies] = useState({})

//     useEffect(() => {
//         const savedWatchList = localStorage.getItem("watchList");
//         if (savedWatchList) {
//             setWatchList(JSON.parse(savedWatchList));
//         }
//     }, []);

//     useEffect(() => {
//         localStorage.setItem("watchList", JSON.stringify(watchList));
//     }, [watchList]);

//     const handleAddMovie = () => {
//         if (movieToAdd.trim() === " ") return;

//         if (watchList.some(movie => movie.title === movieToAdd)) {
//             alert("Movie is already in the watchlist.");
//             setMovieToAdd("");
//             return;
//         }
//         const updatedWatchList = [...watchList, { title: movieToAdd }];
//         setWatchList(updatedWatchList);
//         localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
//         setMovieToAdd("");
//         // setWatchList([...watchList, { title: movieToAdd }]);
//         // setMovieToAdd("");
//     };


//     const handleAddToWatchlist = (movieTitle) => {
//         if (!watchList.some(movie => movie.title === movieTitle)) {
//             setWatchList([...watchList, { title: movieTitle }]);
//         }
//     };
    

//     const handleRemoveMovie = (title) => {
//         const updatedWatchList = watchList.filter(movie => movie.title !== title);
//         setWatchList(updatedWatchList);
//     };

//     const handleRatingChange = (movieTitle, newRating) => {
//         setRatings(prevRatings => ({
//             ...prevRatings,
//             [movieTitle]: newRating
//         }));
//     };

//     const handleWatchedChange = (movieTitle) => {
//         setWatchedMovies(prevWatched => ({
//             ...prevWatched,
//             [movieTitle]: !prevWatched[movieTitle],
//         }));
//         setRatings((prevRatings) => ({
//             ...prevRatings,
//             [movieTitle]: 0, // Reset the rating when marking as watched
//           }));
//     };

//     const handleReviewChange = (movieTitle, newReview) => {
//         setReviews(prevReviews => ({
//             ...prevReviews,
//             [movieTitle]: newReview,
//         }));
//     };


//     return (
//         <div className="container-fluid text-center text-white">
//             <div style={{
//                 backgroundImage: 'url("https://media.istockphoto.com/id/177274717/photo/abstract-multimedia-background-composed-of-many-images-with-copy.jpg?s=612x612&w=0&k=20&c=V0G4Z-glNKzuI1ZvQMObi3_0PuxUHOqzur7d5LXB29U=")',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 minHeight: '100vh',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//             }}>

//                 <div className="row">
//                     <div className="col-sm-4">
//                         <Navigation />
//                        <div className="watchlist">
//                             <h2 className="text-white">My Watchlist</h2>
//                             <p>Got movies you want to remember for next time? Save them Here!</p>
//                             <input
//                                 type="text"
//                                 placeholder="Enter movie title"
//                                 value={movieToAdd}
//                                 onChange={(e) => setMovieToAdd(e.target.value)}
//                                 onKeyDown={(e) => {
//                                     if (e.key === 'Enter') {
//                                         handleAddMovie();
//                                     }
//                                 }}
//                             />
//                             <button onClick={handleAddMovie}>Add Movie</button>
//                             <ul className="movie-list" style={{ marginTop: '10px' }}>
//                                 {watchList.map(movie => (
//                                     <li key={movie.title}>
//                                         <div className="list-item">
//                                             {movie.title}
//                                             <button onClick={() => handleRemoveMovie(movie.title)}>Remove</button>
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                     </div>
//                     <div className="col-sm-4">
//                     <Header />
//                         <Link href="/form">Find Your Movie Here:</Link>
     
//                     </div>


//             <div className="col-sm-4">
//                     <div className="movie-tracker">
//                         <h2>My Movie Tracker</h2>
//                         <p>Track the movies you've watched and leave reviews</p>
//                         <ul className="movie-list">
//                             {watchList.map(movie => (
//                                 <li key={movie.title}>
//                                     <div className="movie-entry">
//                                         <div className="movie-title">{movie.title}</div>
//                                                                                 <label>
//                                             Watched:
//                                             <input
//                                                 type="checkbox"
//                                                 checked={watchedMovies[movie.title] || false}
//                                                 onChange={() => handleWatchedChange(movie.title)}
//                                             />
//                                         </label>
//                                         {watchedMovies[movie.title] && (
//                         <div>
//                           <div className="rating">
//                             <StarRating
//                               value={ratings[movie.title] || 0}
//                               onChange={(newRating) =>
//                                 handleRatingChange(movie.title, newRating)
//                               }
//                             />
//                           </div>
//                                         <textarea
//                                             className="review"
//                                             placeholder="Leave a review..."
//                                             value={review[movie.title] || ''}
//                                             onChange={e =>
//                                                 handleReviewChange(movie.title, e.target.value)
//                                             } />
//                                     </div>
//                                         )}
//                                         </div>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             </div>
//             </div>
//     )
// }

// export default Page