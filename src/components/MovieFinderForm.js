// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // const questions = [
// //   "Question 1: What genre movie do you prefer to watch (All questions are optional)?",
// //   "Question 2: How do you prefer to watch movies?",
// //   "Question 3: Do you have a preferred actor/actress?"
// // ];

// // const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

// // const MovieFinderForm = () => {
// //   const [currentQuestion, setCurrentQuestion] = useState(0);

// //   const handleNext = () => {
// //     setCurrentQuestion((prevQuestion) => prevQuestion + 1);
// //   };

// //   const handlePrevious = () => {
// //     setCurrentQuestion((prevQuestion) => prevQuestion - 1);
// //   };

// //   return (
// //     <div className="popup-form">
// //       <div className="form-content">
// //         {currentQuestion < questions.length ? (
// //           <>
// //             <h2 style={{ color: '#CBB26A' }}>{questions[currentQuestion]}</h2>
// //             {options.map((option, index) => (
// //               <Button
// //                 key={index}
// //                 variant="outline-light"
// //                 className="option-button"
// //                 onClick={handleNext}
// //               >
// //                 {option}
// //               </Button>
// //             ))}
// //             {currentQuestion > 0 && (
// //               <Button variant="outline-light" onClick={handlePrevious}>
// //                 Previous
// //               </Button>
// //             )}
// //           </>
// //         ) : (
// //           <div className="empty-screen">
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };







// // import React, { useState } from "react";
// // import axios from "axios";

// // const MovieFinderForm = () => {
// //   const [genre, setGenre] = useState("");
// //   const [titleType, setTitleType] = useState('');
// //   const [startYear, setStartYear] = useState('');
// //   const [endYear, setEndYear] = useState('');
// // //   const [duration, setDuration] = useState("");
// // //   const [mood, setMood] = useState("");
// //   const [recommendedMovie, setRecommendedMovie] = useState(null);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();


// //     const baseURL = "https://moviesdatabase.p.rapidapi.com";

// //     const endpoint = "/titles";
// //     const queryParams = {
// //         genre: genre,
// //         titleType: titleType,
// //         startYear: startYear,
// //         endYear: endYear,
// //       };

// //       const url = `${baseURL}${endpoint}`;
// //       const headers = {
// //         'X-RapidAPI-Key': 'your-api-key',
// //         "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
// //       };

// //     axios.get("http://127.0.0.1:8000/api/filter_movies/", { headers, params: queryParams })
// //         .then((response) => {
// //         const movies = response.data.results;            
// //         // const movie = response.data.map((item) => item.title);
// //         setRecommendedMovie(movies);
// //         })
// //         .catch((error) => {
// //         console.error(error);
// //         })
// //     };

// // //       .get(url, { headers, params})
// // //           genre,
// // //           duration,
// // //           mood,
// // //         }
// // //       })
// // //       .then(response => {
// // //         const filteredMovies = response.data;
// // //         if (filteredMovies.length > 0) {
// // //           // Get a random recommended movie from the filtered list
// // //           const randomIndex = Math.floor(Math.random() * filteredMovies.length);
// // //           setRecommendedMovie(filteredMovies[randomIndex]);
// // //         } else {
// // //           setRecommendedMovie(null);
// // //         }
// // //       })
// // //       .catch(error => {
// // //         console.error(error);
// // //       });
// // //   };

// //   return (
// //     <div className="text-white text-center">
// //       <h1>Find Your Perfect Movie</h1>
// //       <form onSubmit={handleSubmit}>

// //       <div>
// //           <label>Genre:</label>
// //           <select value={genre} onChange={(e) => setGenre(e.target.value)}>
// //             <option value="">Select genre...</option>
// //             <option value="Action">Action</option>
// //             <option value="Comedy">Comedy</option>
// //             <option value="Drama">Drama</option>
// //             <option value="Sci-Fi">Sci-Fi</option>
// //           </select>
// //         </div>
// //         <div>
// //           <label>Title Type:</label>
// //           <select value={titleType} onChange={(e) => setTitleType(e.target.value)}>
// //             <option value="">Select title type:</option>
// //             <option value="A">A</option>
// //             <option value='tvSeries'>tvSeries</option>
// //             <option value="tvMovie">Movie</option>
// //           </select>
// //         </div>
// //         <div>
// //           <label>Start Year:</label>
// //           <select value={startYear} onChange={(e) => setStartYear(e.target.value)}>
// //             <option value="">Select start year:</option>
// //             <option value="1980">1980</option>
// //             <option value='1990'>1990</option>
// //             <option value="2000">2000</option>
// //           </select>
// //         </div>
// //         <div>
// //           <label>End Year:</label>
// //           <select value={endYear} onChange={(e) => setEndYear(e.target.value)}>
// //             <option value="">Select end year:</option>
// //             <option value="1990">1990</option>
// //             <option value="2000">2000</option>
// //             <option value="2010">2010</option>
// //           </select>
// //         </div>
// //         <button type="submit">Get Movie</button>
// //     </form>
// //         {recommendedMovie?.map((movie, index) => (
// //                     <div key={index}>
// //                         <h1>Your Movie Is:</h1>
// //                         <h3>{movie.titleText}</h3>  
// //                         </div>
// //                 ))}
// //     </div>
// //             );
// //             };
//         //  {recommendedMovie && (
//         //     <div>
//         //         <h2>Recommended Movie:</h2>
//         //         <p>{recommendedMovie.titleText}</p>
//         //         </div>
//         //         )}
                

// export default function MovieFinderForm() {
//     <div>
//         <div className="text-white">
//           <label>What genre of movie are you in the mood for?</label>
//           <select value={genre} onChange={(e) => setGenre(e.target.value)}>
//             <option value="">Select genre...</option>
//             <option value="Action">Action</option>
//             <option value="Comedy">Comedy</option>
//             <option value="Drama">Drama</option>
//             <option value="Sci-Fi">Sci-Fi</option>
//           </select>
//         </div>
//         <div>
//           <label>How long do you feel like watching a movie?</label>
//           <select value={duration} onChange={(e) => setDuration(e.target.value)}>
//             <option value="">Select duration...</option>
//             <option value="Short">Short (under 90 minutes)</option>
//             <option value="Medium">Medium (90-120 minutes)</option>
//             <option value="Long">Long (over 2 hours)</option>
//           </select>
//         </div>
//         <div>
//           <label>What mood are you in?</label>
//           <select value={mood} onChange={(e) => setMood(e.target.value)}>
//             <option value="">Select mood...</option>
//             <option value="Exciting">Exciting</option>
//             <option value="Happy">Happy</option>
//             <option value="Thoughtful">Thoughtful</option>
//             <option value="Scary">Scary</option>
//           </select>
//         </div>
//     <div/>
//         <button type="submit">Find Movie</button>

//     }
