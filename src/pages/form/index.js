import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoggedInNavigation from '../../components/LoggedInNavbar';
import authHeader from '../../services/auth.headers';

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
 const [trailers, setTrailers] = useState(null);
 const [isModalVisible, setIsModalVisible] = useState(false);
 const [watchList, setWatchList] = useState([]);


//  useEffect(() => {
//   const savedWatchList = localStorage.getItem("watchList");
//   if (savedWatchList) {
//       setWatchList(JSON.parse(savedWatchList));
//   }
// }, []);




 const handleImageClick = (selectedGenre) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = selectedGenre;
    setUserAnswers(newAnswers);
    handleNextQuestion();
  };

 const [questions, setQuestions] = useState([
   "What genre of movie would you like to watch?",
   "What decade of movies would you like to watch?",
   "About how long do you feel like watching a movie?",
   "Do you prefer to watch movies that are highly rated by other app users? (All ratings are out of 10).",
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
        // const movieId = results[randomIndex].id;
        // fetchMovieTrailers(movieId);
  
        if (results.length > 0) {
          const filteredMovies = results.filter(movie => {
            const runtimeSeconds = movie.runtime.seconds;
            return runtimeSeconds >= selectedRuntimeStart && runtimeSeconds <= selectedRuntimeEnd;
          });
  
          let filteredMoviesWithPreference = filteredMovies;
  
          if (selectedRatingPreference === "high") {
            filteredMoviesWithPreference = filteredMovies.filter(movie => {
              return movie.ratingsSummary.aggregateRating >= 7.0;
            });
          } else if (selectedRatingPreference === "low") {
            filteredMoviesWithPreference = filteredMovies.filter(movie => {
              return movie.ratingsSummary.aggregateRating < 7.0;
            });
          }
  
          if (filteredMoviesWithPreference.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredMoviesWithPreference.length);
            const movieId = filteredMoviesWithPreference[randomIndex].id;
            fetchMovieTrailers(movieId);
            setRandomMovie(filteredMoviesWithPreference[randomIndex]);
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
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // All questions answered, proceed to get random movie
      getRandomMovie();
      if (currentQuestion === 2) {
        if (selectedRuntime === "7200") {
          setSelectedRuntimeStart(0);
          setSelectedRuntimeEnd(7200);
        } else if (selectedRuntime === "9000") {
          setSelectedRuntimeStart(7201);
          setSelectedRuntimeEnd(9000);
        } else if (selectedRuntime === "14400") {
          setSelectedRuntimeStart(7201);
          setSelectedRuntimeEnd(14400);
        } else if (selectedRuntime === "10801") {
          setSelectedRuntimeStart(14401);
          setSelectedRuntimeEnd(Number.POSITIVE_INFINITY);
        } else {
          setSelectedRuntimeStart(0);
          setSelectedRuntimeEnd(Number.POSITIVE_INFINITY);
        }
      }
    }
  };
  useEffect(() => {
    if (selectedRatingPreference !== "") {
      getRandomMovie();
    }
  }, [selectedRatingPreference]);

  const fetchMovieTrailers = (movieId) => {
    axios.get(`http://localhost:8000/api/get_trailers/${movieId}`)
      .then(response => {
        const trailers = response.data.results;

        if (trailers != null) {
          setIsModalVisible(true);
          setTrailers(trailers.trailer);
        } else {
          setIsModalVisible(true);
          setTrailers(null);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  // const handleAddToWatchlist = (movieTitle) => {
  //   if (!watchList.some(movie => movie.title === movieTitle)) {
  //     const updatedWatchList = [...watchList, { title: movieTitle }];
  //     setWatchList(updatedWatchList);
  //     localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
  //   }
  // };

  const handleAddToWatchlist = (movieId) => {
    const headers = authHeader()
    axios
      .post('http://127.0.0.1:8000/api/add_to_watchlist/', { movieId }, headers )
      .then(response => {
        console.log(response.data);
        // const updatedWatchList = [...watchList, { title: movie }];
        // setWatchList(updatedWatchList);
        // localStorage.setItem('watchList', JSON.stringify(updatedWatchList));
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
  };
  

  return (
    <div className='container-fluid' style={{
      backgroundImage: 'url("https://media.istockphoto.com/id/177274717/photo/abstract-multimedia-background-composed-of-many-images-with-copy.jpg?s=612x612&w=0&k=20&c=V0G4Z-glNKzuI1ZvQMObi3_0PuxUHOqzur7d5LXB29U=")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    }}>
  
      <div className='row'>
        <div className='col-lg-12'>
          <LoggedInNavigation />
  
          {showRandomMovie ? (
            <div className="movie-info text-center" style={{ border: '20px solid #1F5D57', padding: '20px', borderRadius: '10px', backgroundColor: 'white', color: '#CBB26A', maxWidth: '800px' }}>
              <h1>Your Random Movie Is:</h1>
              <h3>{randomMovie.titleText.text}</h3>
              <p>Year of Release: {randomMovie.releaseYear.year}</p>
              <p>Runtime: {Math.floor(randomMovie.runtime.seconds / 3600)} hours {Math.floor((randomMovie.runtime.seconds % 3600) / 60)} minutes</p>
              <img src={randomMovie.primaryImage.url} alt="Movie Poster" style={{ maxWidth: '200px', maxHeight: '200px' }} />
              <p className="text-center">Description: {randomMovie.plot.plotText.plainText}</p>
              <p>Movie Rating: {randomMovie.ratingsSummary.aggregateRating}</p>
              <p className="text-center">Watch the Trailer Here:{" "}<a href={trailers} target="_blank" rel="noopener noreferrer">{trailers} </a></p>    
              <button className="btn btn-primary" onClick={() => setShowRandomMovie(false)}>Close</button>

              <div className="breadcrumb" style={{ marginTop: '20px' }}>
              <button className="btn btn-link" onClick={() => setShowRandomMovie(false)}>Back to Form</button>
            </div>
            <button className="btn btn-custom" onClick={() => {handleAddToWatchlist(randomMovie.id);
            }}>Add to Watchlist</button>

            </div>
          ) : (
            <div className='text-center genre-container'>
              <h2>{questions[currentQuestion]}</h2>
         {currentQuestion === 0 && (
            <div className="image-buttons m-2 d-flex justify-content-center flex-wrap">
                <img
                style={{width:'150px' , height: '250px', margin: '20px'}}
              src='/images/genres/action.jpeg'
              alt="Action"
              className={userAnswers[currentQuestion] === "Action" ? "selected" : ""}
              onClick={() => handleImageClick("Action")}
            />
                <img 
                style={{width:'150px' , height: '250px', margin: '20px'}}
                src='/images/genres/comedy.jpeg'
              alt="Comedy"
              className={userAnswers[currentQuestion] === "Comedy" ? "selected" : ""}
              onClick={() => handleImageClick("Comedy")}
            />
                <img 
                style={{width:'150px' , height: '250px', margin: '20px'}}
                src='/images/genres/drama.jpeg'
              alt="Drama"
              className={userAnswers[currentQuestion] === "Drama" ? "selected" : ""}
              onClick={() => handleImageClick("Drama")}
            />
                <img 
                style={{width:'150px' , height: '250px', margin: '20px'}}
                src='/images/genres/family.jpeg'
              alt="Family"
              className={userAnswers[currentQuestion] === "Family" ? "selected" : ""}
              onClick={() => handleImageClick("Family")}
            />
                <img 
                style={{width:'150px' , height: '250px', margin: '20px'}}
                src='/images/genres/horror.jpeg'
              alt="Horror"
              className={userAnswers[currentQuestion] === "Horror" ? "selected" : ""}
              onClick={() => handleImageClick("Horror")}
            />
          </div>
        )}

        {currentQuestion === 1 && (
            <div className="image-buttons m-4 p-2 d-flex justify-content-center flex-wrap">
            <img
                style={{width:'150px' , height: '200px', margin: '20px'}}
                src="/images/decades/60s.png"
              alt="1960's"
              className={userAnswers[currentQuestion] === "1960" ? "selected" : ""}
              onClick={() => handleImageClick("1960")}
            />            
            
            <img
                style={{width:'150px' , height: '200px', margin: '20px'}}
                src="/images/decades/70s.png"
            alt="1970's"
            className={userAnswers[currentQuestion] === "1970" ? "selected" : ""}
            onClick={() => handleImageClick("1970")}
          />

            <img
              style={{ width: '150px', height: '200px', margin: '20px' }}
              src="/images/decades/back-to-80s.png"
              alt="1980's"
              className={userAnswers[currentQuestion] === "1980" ? "selected" : ""}
              onClick={() => handleImageClick("1980")}
            />            
            
            <img
            style={{ width: '150px', height: '200px', margin: '20px' }}
            src="/images/decades/90s.jpeg"
            alt="1990's"
            className={userAnswers[currentQuestion] === "1990" ? "selected" : ""}
            onClick={() => handleImageClick("1990")}
          />            
          
          <img
          style={{ width: '150px', height: '200px', margin: '20px' }}
          src="/images/decades/2000s.jpeg"
          alt="2000's"
          className={userAnswers[currentQuestion] === "2000" ? "selected" : ""}
          onClick={() => handleImageClick("2000")}
        />            
        
        <img
        style={{ width: '150px', height: '200px', margin: '20px' }}
        src="/images/decades/2010s.webp"
        alt="2000's"
        className={userAnswers[currentQuestion] === "2010" ? "selected" : ""}
        onClick={() => handleImageClick("2010")}
      />            
      
      <img
      style={{ width: '150px', height: '200px', margin: '20px' }}
      src="/images/decades/2020s.png"
      alt="2020's"
      className={userAnswers[currentQuestion] === "2020" ? "selected" : ""}
      onClick={() => handleImageClick("2020")}
    />
    </div>
        )}


{currentQuestion === 2 && (
  <div
  className="image-buttons m-4 p-4 d-flex justify-content-center align-items-center container-fluid flex-wrap">
    <div className='runtime-option'>
      <h5 className='text-center'>Less than Two Hours</h5>
      <img style={{ width: '150px', height: '150px', margin: '30px' }}
      src="/images/runtime/lessthantwohours.png"
        alt="Less than 2 hours"
        className={selectedRuntime === "7200" ? "selected" : ""}
        onClick={() => {
          setSelectedRuntime("7200");
          setSelectedRuntimeStart(0);
          setSelectedRuntimeEnd(7200);
          handleNextQuestion();
        }}
      />
    </div>

    <div className='runtime-option img-fluid'>
      <h5>About Two Hours</h5>
      <img style={{ width: '150px', height: '150px', margin: '30px' }}
      src="/images/runtime/2hours.png"
        alt="About 2 hours"
        className={selectedRuntime === "9000" ? "selected" : ""}
        onClick={() => {
          setSelectedRuntime("9000");
          setSelectedRuntimeStart(7201); // 2 to 3 hours
          setSelectedRuntimeEnd(9000);
          handleNextQuestion();
        }}
      />
    </div>

    <div className='runtime-option'>
      <h5>Between 2-3 Hours</h5>
      <img style={{ width: '150px', height: '150px', margin: '30px' }}
        src="/images/runtime/between2-3hours.png"
        alt="2-3 hours"
        className={selectedRuntime === "14400" ? "selected" : ""}
        onClick={() => {
          setSelectedRuntime("10800");
          setSelectedRuntimeStart(7200);
          setSelectedRuntimeEnd(10800);
          handleNextQuestion();

        }}
      />
    </div>

    <div className='runtime-option'>
      <h5>More than 3 Hours</h5>
      <img style={{ width: '150px', height: '150px', margin: '30px' }}
      src="/images/runtime/3hours.jpeg"
        alt="3 hours or more"
        className={selectedRuntime === "10801" ? "selected" : ""}
        onClick={() => {
          setSelectedRuntime("10801");
          setSelectedRuntimeStart(14401);
          setSelectedRuntimeEnd(Number.POSITIVE_INFINITY);
          handleNextQuestion();

        }}
      />
    </div>
  </div>
)}


{currentQuestion === 3 && (
  <div className="image-buttons m-4 p-2 d-flex justify-content-center flex-wrap genre-container">
    <div className='rating-option'>    
      <h3 style={{ margin: '20px' }}>High Rating (7 or More)</h3>
      <img
        style={{ width: '150px', height: '150px', margin: '20px' }}
        src="/images/ratings/liked.png"
        alt="High Rating"
        className={selectedRatingPreference === "high"}
        onClick={() => {
          setSelectedRatingPreference("high");
          handleNextQuestion();
        }}
      />
    </div>

    <div className='rating-option'>    
      <h3 style={{ margin: '20px' }}>Low Ratings (Below 7)</h3>
      <img
        style={{ width: '150px', height: '150px', margin: '20px' }}
        src="/images/ratings/badreviews.png"
        alt="Low Rating"
        className={selectedRatingPreference === "low"}
        onClick={() => {
          setSelectedRatingPreference("low");
          handleNextQuestion(); // Move to the next question
        }}
      />
    </div>

    <div className='rating-option'>    
      <h3 style={{ margin: '20px' }}>No Specific Preference</h3>
      <img
        style={{ width: '150px', height: '150px', margin: '20px' }}
        src="/images/ratings/trashtreasure.jpeg"
        alt="No Preference"
        className={selectedRatingPreference === "" ? "selected" : ""}
        onClick={() => {
          setSelectedRatingPreference("");
          handleNextQuestion(); // Move to the next question
        }}
      />
    </div>
  </div>
)}
                            
              <button className='btn btn-primary' onClick={handleNextQuestion}>
                {currentQuestion < questions.length - 1 ? 'Next' : 'Get Random Movie'}
              </button>
              {noMoviesFound && (
                <h3 className='text-center m-2'>No movies met that criteria. Please change your requirements and try again</h3>
              )}
              <div className="breadcrumb">
              {currentQuestion > 0 && (
                <button className="btn btn-primary" onClick={handlePreviousQuestion}>Previous</button>
              )}
            </div>
            </div>
          )}
  
        </div>
      </div>
    </div>
  );
};
export default QAForm;
