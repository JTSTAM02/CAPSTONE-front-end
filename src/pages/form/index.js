import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../../components/Navigation';

const QAForm = () => {
  const [showRandomMovie, setShowRandomMovie] = useState(false);
  const [randomMovie, setRandomMovie] = useState(null);
  const [noMoviesFound, setNoMoviesFound] = useState(false);
 const [currentQuestion, setCurrentQuestion] = useState(0);
 const [userAnswers, setUserAnswers] = useState([]);
 const [selectedRuntime, setSelectedRuntime] = useState("");
 const [selectedRuntimeStart, setSelectedRuntimeStart] = useState("");
 const [selectedRuntimeEnd, setSelectedRuntimeEnd] = useState("");
 const [selectedRatingPreference, setSelectedRatingPreference] = useState("");

 const [questions, setQuestions] = useState([
   "What genre of movie would you like to watch?",
   "What decade of movies would you like to watch?",
   "About how long do you feel like watching a movie?",
   "Do you prefer to watch movies that are highly rated by other app users or movie critics?",
//    "Do you want to watch a movie that has won any special awards?",
 ]);

 const getRandomMovie = () => {
    const url = "http://localhost:8000/api/get_random_movie/";
    const queryParams = {
      genre: userAnswers[0],
      startYear: userAnswers[1],
      endYear: parseInt(userAnswers[1]) + 9,
    };
  
    axios.get(url, { params: queryParams })
      .then(response => {
        const results = response.data.results;
  
        if (results.length > 0) {
          const filteredMovies = results.filter(movie => {
            const runtimeSeconds = movie.runtime.seconds;
            return runtimeSeconds >= selectedRuntimeStart && runtimeSeconds <= selectedRuntimeEnd;
          });
  
          if (filteredMovies.length > 0) {
            let filteredByRating = filteredMovies;
            if(selectedRatingPreference !== ''){
                filteredByRating = filteredMovies.filter(movie => {
                    const rating = movie.ratingsSummary.aggregateRating;
  
                    if (
                        (selectedRatingPreference === "high" && rating >= 7.0) ||
                        (selectedRatingPreference === "low" && rating < 7.0)
                    ) {
                        return true;
                    } else {
                        return false;
                    }
                    });
            }
  
            if (filteredByRating.length > 0) {
              const randomIndex = Math.floor(Math.random() * filteredByRating.length);
              setRandomMovie(filteredByRating[randomIndex]);
              setShowRandomMovie(true);
              setNoMoviesFound(false);
            } else {
              console.log("No movies found for the selected filters and rating preference.");
              setRandomMovie(null);
              setShowRandomMovie(false);
              setNoMoviesFound(true);
            }
          } else {
            console.log("No movies found for the selected filters.");
            setRandomMovie(null);
            setShowRandomMovie(false);
            setNoMoviesFound(true);
          }
        } else {
          console.log("No movies found for the selected filters.");
          setRandomMovie(null);
          setShowRandomMovie(false);
          setNoMoviesFound(true);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
  

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // All questions answered, proceed to get random movie
      getRandomMovie();
    }
  };

  return (
    <div style={{
      backgroundImage: 'url("https://media.istockphoto.com/id/177274717/photo/abstract-multimedia-background-composed-of-many-images-with-copy.jpg?s=612x612&w=0&k=20&c=V0G4Z-glNKzuI1ZvQMObi3_0PuxUHOqzur7d5LXB29U=")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: "white",
    }}>

      <Navigation />
    
      <div className='text-center'>
        <h2>{questions[currentQuestion]}</h2>
        {currentQuestion === 0 && (
          <select value={userAnswers[currentQuestion] || ''} onChange={event => {
            const newAnswers = [...userAnswers];
            newAnswers[currentQuestion] = event.target.value;
            setUserAnswers(newAnswers);
          }}>
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Family">Family</option>
            <option value="Horror">Horror</option>
          </select>
        )}

        {currentQuestion === 1 && (
            <select value={userAnswers[currentQuestion] || ""} onChange={event => {
                const newAnswers = [...userAnswers];
                newAnswers[currentQuestion] = event.target.value;
                setUserAnswers(newAnswers);
              }}>
                <option value="">Select Decade</option>
                <option value="1970">1970's</option>
                <option value="1980">1980's</option>
                <option value="1990">1990's</option>
                <option value="2000">2000's</option>
                <option value="2010">2010's</option>
                <option value="2020">2020's</option>
              </select>
        )}

        {currentQuestion === 2 && (
                      <select value={selectedRuntime} 
                      onChange={event => {
                        const selectedValue = parseInt(event.target.value);
                        setSelectedRuntime(selectedValue);

                        if (selectedValue === 7200) {
                            setSelectedRuntimeStart(0);
                            setSelectedRuntimeEnd(7200);
                          } else if (selectedValue === 10800) {
                            setSelectedRuntimeStart(7201);
                            setSelectedRuntimeEnd(10800);
                          } else if (selectedValue === 14400) {
                            setSelectedRuntimeStart(10801);
                            setSelectedRuntimeEnd(14400);
                          } else if (selectedValue === 10801) {
                            setSelectedRuntimeStart(14401);
                            setSelectedRuntimeEnd(Number.POSITIVE_INFINITY);
                          } else {
                            setSelectedRuntimeStart(0);
                            setSelectedRuntimeEnd(Number.POSITIVE_INFINITY);
                          }
                        }
                    }>
                      <option value="">Select Runtime</option>
                      <option value="7200">Less than 2 hours</option>
                      <option value="10800">About 2 hours</option>
                      <option value="14400">2-3 hours</option>
                      <option value="10801">3 hours or more</option>
                    </select>
        )}


        {currentQuestion === 3 && (
                      <select value={selectedRatingPreference} 
                      onChange={event => {
                        setSelectedRatingPreference(event.target.value);
                        }}
                    >
                      <option value=''>Select Preference</option>
                      <option value="high">High Rating (Over 7)</option>
                      <option value="low">Low Ratings (below 7)</option>
                      <option value="">No Preference</option>
                    </select>
        )}

        <button onClick={handleNextQuestion}>
          {currentQuestion < questions.length -1 ? "Next" : "Get Random Movie"}
        </button>

        {showRandomMovie && randomMovie && (
          <div className="movie-info text-center">
            <h3>Your Random Movie Is:</h3>
            <p>{randomMovie.titleText.text}</p>
            <p>Year of Release: {randomMovie.releaseYear.year}</p>
            <p>Runtime: {Math.floor(randomMovie.runtime.seconds / 3600)} hours {Math.floor((randomMovie.runtime.seconds % 3600) / 60)} minutes</p>
            <img src={randomMovie.primaryImage.url} alt="Movie Poster" style={{ maxWidth: '200px', maxHeight: '200px' }} />
            <p className="text-center">Description: {randomMovie.plot.plotText.plainText}</p>
            <p>Movie Rating: {randomMovie.ratingsSummary.aggregateRating}</p>
          </div>
        )}
        {noMoviesFound && (
            <h3 className='text-center m-2'>No movies met that criteria. Please change your requirements and try again</h3>
        )}
      </div>
    </div>
  );
};

export default QAForm;





//   const [showRandomMovie, setShowRandomMovie] = useState(false);
//   const [randomMovie, setRandomMovie] = useState(null);  
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [isFirstSlide, setIsFirstSlide] = useState(true);
//   const [selectedAnswer, setSelectedAnswer] = useState('');
//   const [userAnswers, setUserAnswers] = useState([]);
//   const [recommendedMovie, setRecommendedMovie] = useState(null);
//   const [showRecommendation, setShowRecommendation] = useState(false);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [questionsAnswered, setQuestionsAnswered] = useState(false);
//   const [loadingRandomMovie, setLoadingRandomMovie] = useState(false);
//   const [selectedGenre, setSelectedGenre] = useState('')


//   useEffect(() => {
//     const storedFirstSlide = localStorage.getItem("isFirstSlide");
//     if (storedFirstSlide !== null) {
//       setIsFirstSlide(JSON.parse(storedFirstSlide));
//     }
//   }, []);

//   const answers = [
//     [],
//     ["Action", "Animation", "Comedy", "Crime", "Drama", "Family", "Horror", "Sport", "Western"],
//     ["1950s", "1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"],
//     ["Less than 90 minutes", "About 2 hours", "2-3 hours","Longer than 3 Hours", "No preference"],
//     ["Yes", "No", "It doesn't matter"]
//     ["Sure!", "No", "No Preference"]
//   ];


//   const fetchRandomMovie = () => {
//     axios.get('http://localhost:8000/api/get_random_movie/')
//       .then(response => {
//         const results = response.data.results;
//         const randomIndex = Math.floor(Math.random() * results.length);
//         setIsModalVisible(true); // Show the modal when random movie is fetched
//         setRandomMovie(results[randomIndex]);
//         setShowRandomMovie(true);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };


//   useEffect(() => {
//     if (selectedAnswer !== '') {
//       handleNextQuestion();
//     }
//   }, [selectedAnswer]);

//   const handleNextQuestion = async () => {
//     if (currentQuestion < questions.length - 1) {
//       setUserAnswers([...userAnswers, selectedAnswer]);
//       setSelectedAnswer('');
//       setCurrentQuestion(currentQuestion + 1);
//     } else {

//         setUserAnswers([...userAnswers, selectedAnswer]); // Update userAnswers
//         setSelectedAnswer('');
//         setCurrentQuestion(0);
//         setQuestionsAnswered(true); // Mark all questions answered
//         setLoadingRandomMovie(true);
//         fetchRandomMovie();
//     //   setCurrentQuestion(0);
//     //   setUserAnswers([]);
//     // const response = await axios.post('api/get-movie-recommendation', {answers: userAnswers});
//     // const recommendedMovie = response.data.recommendedMovie;
//     // setRecommendedMovie(recommendedMovie);
//     // setShowRecommendation(true);
//     }
//   };

//   const handleGetYourMovie = () => {
//     setShowRecommendation(true);
//     setIsModalVisible(true)
//   };


// const getRandomMovie = () => {
//     axios.get('http://localhost:8000/api/get_random_movie/')
//       .then(response => {
//         const results = response.data.results;
//         const randomIndex = Math.floor(Math.random() * results.length);
//         setRandomMovie(results[randomIndex]);
//         setShowRandomMovie(true);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };

//   return (
//     <div style={{
//       backgroundImage: 'url("https://media.istockphoto.com/id/177274717/photo/abstract-multimedia-background-composed-of-many-images-with-copy.jpg?s=612x612&w=0&k=20&c=V0G4Z-glNKzuI1ZvQMObi3_0PuxUHOqzur7d5LXB29U=")',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       minHeight: '100vh',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       color: "white",
//     }}>

//       <Navigation />

//       <div className="container-fluid ${showMovieData ? 'show-movie-info' : ''}">
//         <div className="card" style={{
//           padding: "10px",
//           textAlign: 'center',
//           backgroundColor: '#1F5D57',
//           color: '#CBB26A'
//         }}>

// {questionsAnswered && showRandomMovie && randomMovie ? (
//             <div className="movie-info">
//               <div className="modal-content" style={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
//                 <div className="modal-header">
//                   <h2>Your Random Movie Is:</h2>
//                 </div>
//                 <div className="modal-body" style={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
//                   <p>{randomMovie.titleText.text}</p>
//                   <p>Year of Release: {randomMovie.releaseYear.year}</p>
//                   <img src={randomMovie.primaryImage.url} alt="Movie Poster" style={{maxWidth: '200px', maxHeight: '200px'}}></img>
//                 </div>
//                 <div className="modal-footer" style={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
//                   <button style={{ margin: '10px'}} onClick={() => setShowRandomMovie(false)}>Close</button>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div>
//               <h2 className="card-title">{questions[currentQuestion]}</h2>
//               <div className="answers" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 {answers[currentQuestion].map((answer, index) => (
//                   <button style={{ width: '200px', padding: "5px", margin: "4px", backgroundColor: '#CBB26A' }}
//                     key={index}
//                     className={`answer-button ${selectedAnswer === answer ? 'selected' : ''}`}
//                     onClick={() => handleAnswerClick(answer)}
//                   >
//                     {answer}
//                   </button>
//                 ))}
//               </div>
//               <button
//                 className="btn-circle"
//                 style={{
//                   backgroundColor: '#CBB26A',
//                   width: '200px',
//                   padding: '10px',
//                   margin: '0 auto',
//                   display: 'block',
//                   border: "solid #CBB26A"
//                 }}
//                 onClick={currentQuestion === questions.length - 1 ? getRandomMovie : handleNextQuestion}
//               >
//                 {currentQuestion === questions.length - 1 ? "Get Random Movie": 'Next'}
//               </button>
//             </div>
//           )}
//       </div>
//     </div>
//   </div>
// );}

// export default QAForm;



//             {/* <h2 className="card-title">{questions[currentQuestion]}</h2>
//             <div className="answers" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             {answers[currentQuestion].map((answer, index) => (
//                     <button style={{ width: '200px', padding: "5px", margin: "4px", backgroundColor: '#CBB26A' }}
//                     key={index}
//                     className={`answer-button ${selectedAnswer === answer ? 'selected' : ''}`}
//                     onClick={() => handleAnswerClick(answer)}
//                   >
//                     {answer}
//                   </button>
//                 ))}
//                 </div>
//           <h2 className="card-title">Your Movie Recommendations</h2>
//           <p>Answer the questions to get a random movie recommendation.</p>
//           <button
//             className="btn-circle"
//             style={{
//               backgroundColor: '#CBB26A',
//               width: '200px',
//               padding: '10px',
//               margin: '0 auto',
//               display: 'block',
//               border: "solid #CBB26A"
//             }}
//             onClick={currentQuestion === questions.length - 1 ? getRandomMovie : handleNextQuestion}
//           >
//             {currentQuestion === questions.length - 1 ? "Get Random Movie": 'Next'}
//           </button>
//         </div>
//       </div>

//       {showRandomMovie && randomMovie && (
//         <div className="movie-info">
//           <div className="modal-content" style={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
//             <div className="modal-header">
//               <h2>Your Random Movie Is:</h2>
//             </div>
//             <div className="modal-body" style={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
//               <p>{randomMovie.titleText.text}</p>
//               <p>Year of Release: {randomMovie.releaseYear.year}</p>
//             <img src={randomMovie.primaryImage.url} alt="Movie Poster" style={{maxWidth: '200px', maxHeight: '200px'}}></img>

//             </div>
//             <div className="modal-footer" style={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
//               <button style={{ margin: '10px'}} onClick={() => setShowRandomMovie(false)}>Close</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }; */}

















//   // First Try-------------------------------------------------------------------------------------

// // <div className="container-fluid">
// //         <div className="card" style={{ padding: "10px", textAlign: 'center', backgroundColor: '#1F5D57', color: '#CBB26A' }}>
// //           <h2 className="card-title">{questions[currentQuestion]}</h2>
// //           <div className="answers" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// //             {answers[currentQuestion].map((answer, index) => (
// //                     <button style={{ width: '200px', padding: "5px", margin: "4px", backgroundColor: '#CBB26A' }}
// //                     key={index}
// //                     className={`answer-button ${selectedAnswer === answer ? 'selected' : ''}`}
// //                     onClick={() => handleAnswerClick(answer)}
// //                   >
// //                     {answer}
// //                   </button>
// //             ))}
// //           </div>
// //           <br />
// //           <button className="btn-circle"
// //             style={{ backgroundColor: '#CBB26A', width: '120px', padding: '10px', margin: '0 auto', display: 'block', border: "solid #CBB26A" }}
// //             onClick={handleNextQuestion}>
// //             {currentQuestion === questions.length - 1 ? "Get Your Movie" : "Next"}
// //           </button>
// //         </div>
// //       </div>

// //       {isModalVisible && showRecommendation && recommendedMovie && (
// //         <div className="movie-info">
// //           <div className="modal-content">
// //             <div className="modal-header">
// //               <h2>Your Random Movie Is:</h2>
// //             </div>
// //             <div className="modal-body">
// //               <p>{randomMovie.titleText.text}</p>
// //             </div>
// //             <div className="modal-footer">
// //               <button onClick={() => setIsModalVisible(false)}>Close</button>
// //             </div>
// //           </div>
// //         </div>
// //       )}


// //       {/* <div className="container-fluid">
// //         <div className="card" style={{ padding: "10px", textAlign: 'center', backgroundColor: '#1F5D57',
// //         color: '#CBB26A' }}>
// //           <h2 className="card-title">{questions[currentQuestion]}</h2>
// //           <div className="answers" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
// //             {answers[currentQuestion].map((answer, index) => (
// //               <button style={{ width: '200px', padding: "5px", margin: "4px", backgroundColor: '#CBB26A' }}
// //                 key={index}
// //                 className={`answer-button ${selectedAnswer === answer ? 'selected' : ''}`}
// //                 onClick={() => handleAnswerClick(answer)}
// //               >
// //                 {answer}
// //               </button>
// //             ))}
// //           </div>
// //           <br />
// //           <button className="btn-circle"
// //           style={{ backgroundColor: '#CBB26A', width: '120px',
// //           padding: '10px',
// //           margin: '0 auto',
// //           display: 'block',
// //           border: "solid #CBB26A",
// //         }} */}
// //           {/* onClick={handleNextQuestion}>
// //             {currentQuestion === questions.length - 1 ? "Restart" : "Next"}
// //           </button>
// //         </div>
// //       </div>
// //       {showRecommendation && recommendedMovie && (
// //         <div> */}
// //         {/* <FinalRecommendation recommendedMovie={recommendedMovie} />
// //         <button className='btn btn-primary' onClick={handleGetYourMovie}>Get Your Movie</button>
// //         </div>
// //       )}
// //     </div> */}
// //     </div>
// //   );
// // };

