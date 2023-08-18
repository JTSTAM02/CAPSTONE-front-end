import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Navigation from '../../components/Navigation';
import FinalRecommendation from '../../components/FinalRecommendation';
import Link from 'next/link';

const QAForm = () => {
  const [showRandomMovie, setShowRandomMovie] = useState(false);
  const [randomMovie, setRandomMovie] = useState(null);  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);
  const [recommendedMovie, setRecommendedMovie] = useState(null);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);


  useEffect(() => {
    const storedFirstSlide = localStorage.getItem("isFirstSlide");
    if (storedFirstSlide !== null) {
      setIsFirstSlide(JSON.parse(storedFirstSlide));
    }
  }, []);

  const questions = [
    "All Questions are optional. Feel free to answer all of them, or as many as you want. Once you have chosen your answer, please click Next.",
    "What kind of mood are you in?",
    "What genre of movie would you like to watch?",
    "What decade of movie would you like to watch?",
    "About How long do you want to watch a movie?",
    "What rating movie would you like to see?",
    "Finally, do you want to watch movies that have won any special awards?"
  ];

  const answers = [
    [],
    ["Happy", "Sad", "Excited", "Calm", "Bored"],
    ["Action", "Comedy", "Drama", "Sci-Fi", "Superhero", "Horror"],
    ["1950s", "1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"],
    ["Less than 90 minutes", "About 2 hours", "2-3 hours","Longer than 3 Hours", "No preference"],
    ["G", "PG", "PG-13", "R"],
    ["Yes", "No", "No Preference"]
  ];


  const fetchRandomMovie = () => {
    axios.get('http://localhost:8000/api/get_random_movie/')
      .then(response => {
        const results = response.data.results;
        const randomIndex = Math.floor(Math.random() * results.length);
        setIsModalVisible(true); // Show the modal when random movie is fetched
        setRandomMovie(results[randomIndex]);
        setShowRandomMovie(true);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  useEffect(() => {
    if (selectedAnswer !== '') {
      handleNextQuestion();
    }
  }, [selectedAnswer]);

  const handleNextQuestion = async () => {
    if (currentQuestion < questions.length - 1) {
      setUserAnswers([...userAnswers, selectedAnswer]);
      setSelectedAnswer('');
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(0);
      setUserAnswers([]);
    const response = await axios.post('api/get-movie-recommendation', {answers: userAnswers});
    const recommendedMovie = response.data.recommendedMovie;

    setRecommendedMovie(recommendedMovie);
    setShowRecommendation(true);
    }
  };

  const handleGetYourMovie = () => {
    setShowRecommendation(true);
    setIsModalVisible(true)
  };


const getRandomMovie = () => {
    axios.get('http://localhost:8000/api/get_random_movie/')
      .then(response => {
        const results = response.data.results;
        const randomIndex = Math.floor(Math.random() * results.length);
        setRandomMovie(results[randomIndex]);
        setShowRandomMovie(true);
      })
      .catch(error => {
        console.error(error);
      });
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

      <div className="container-fluid">
        <div className="card" style={{
          padding: "10px",
          textAlign: 'center',
          backgroundColor: '#1F5D57',
          color: '#CBB26A'
        }}>
            <h2 className="card-title">{questions[currentQuestion]}</h2>
            <div className="answers" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {answers[currentQuestion].map((answer, index) => (
                    <button style={{ width: '200px', padding: "5px", margin: "4px", backgroundColor: '#CBB26A' }}
                    key={index}
                    className={`answer-button ${selectedAnswer === answer ? 'selected' : ''}`}
                    onClick={() => handleAnswerClick(answer)}
                  >
                    {answer}
                  </button>
                ))}
                </div>
          <h2 className="card-title">Your Movie Recommendations</h2>
          <p>Answer the questions to get a random movie recommendation.</p>
          <button
            className="btn-circle"
            style={{
              backgroundColor: '#CBB26A',
              width: '200px',
              padding: '10px',
              margin: '0 auto',
              display: 'block',
              border: "solid #CBB26A"
            }}
            onClick={getRandomMovie}
          >
            Get Random Movie
          </button>
        </div>
      </div>

      {showRandomMovie && randomMovie && (
        <div className="movie-info">
          <div className="modal-content" style={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
            <div className="modal-header">
              <h2>Your Random Movie Is:</h2>
            </div>
            <div className="modal-body" style={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
              <p>{randomMovie.titleText.text}</p>
              <p>Year of Release: {randomMovie.releaseYear.year}</p>
              <p>{randomMovie.info}</p> 
            <img src={randomMovie.primaryImage.url} alt="Movie Poster" style={{maxWidth: '200px', maxHeight: '200px'}}></img>

            </div>
            <div className="modal-footer" style={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
              <button style={{ margin: '10px'}} onClick={() => setShowRandomMovie(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QAForm;
















  // First Try-------------------------------------------------------------------------------------

// <div className="container-fluid">
//         <div className="card" style={{ padding: "10px", textAlign: 'center', backgroundColor: '#1F5D57', color: '#CBB26A' }}>
//           <h2 className="card-title">{questions[currentQuestion]}</h2>
//           <div className="answers" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             {answers[currentQuestion].map((answer, index) => (
//                     <button style={{ width: '200px', padding: "5px", margin: "4px", backgroundColor: '#CBB26A' }}
//                     key={index}
//                     className={`answer-button ${selectedAnswer === answer ? 'selected' : ''}`}
//                     onClick={() => handleAnswerClick(answer)}
//                   >
//                     {answer}
//                   </button>
//             ))}
//           </div>
//           <br />
//           <button className="btn-circle"
//             style={{ backgroundColor: '#CBB26A', width: '120px', padding: '10px', margin: '0 auto', display: 'block', border: "solid #CBB26A" }}
//             onClick={handleNextQuestion}>
//             {currentQuestion === questions.length - 1 ? "Get Your Movie" : "Next"}
//           </button>
//         </div>
//       </div>

//       {isModalVisible && showRecommendation && recommendedMovie && (
//         <div className="movie-info">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h2>Your Random Movie Is:</h2>
//             </div>
//             <div className="modal-body">
//               <p>{randomMovie.titleText.text}</p>
//             </div>
//             <div className="modal-footer">
//               <button onClick={() => setIsModalVisible(false)}>Close</button>
//             </div>
//           </div>
//         </div>
//       )}


//       {/* <div className="container-fluid">
//         <div className="card" style={{ padding: "10px", textAlign: 'center', backgroundColor: '#1F5D57',
//         color: '#CBB26A' }}>
//           <h2 className="card-title">{questions[currentQuestion]}</h2>
//           <div className="answers" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
//             {answers[currentQuestion].map((answer, index) => (
//               <button style={{ width: '200px', padding: "5px", margin: "4px", backgroundColor: '#CBB26A' }}
//                 key={index}
//                 className={`answer-button ${selectedAnswer === answer ? 'selected' : ''}`}
//                 onClick={() => handleAnswerClick(answer)}
//               >
//                 {answer}
//               </button>
//             ))}
//           </div>
//           <br />
//           <button className="btn-circle"
//           style={{ backgroundColor: '#CBB26A', width: '120px',
//           padding: '10px',
//           margin: '0 auto',
//           display: 'block',
//           border: "solid #CBB26A",
//         }} */}
//           {/* onClick={handleNextQuestion}>
//             {currentQuestion === questions.length - 1 ? "Restart" : "Next"}
//           </button>
//         </div>
//       </div>
//       {showRecommendation && recommendedMovie && (
//         <div> */}
//         {/* <FinalRecommendation recommendedMovie={recommendedMovie} />
//         <button className='btn btn-primary' onClick={handleGetYourMovie}>Get Your Movie</button>
//         </div>
//       )}
//     </div> */}
//     </div>
//   );
// };

