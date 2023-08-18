
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import FinalRecommendation from '../../components/FinalRecommendation';
import Navigation from '../../components/Navigation';

const QAForm = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);
  const [recommendedMovie, setRecommendedMovie] = useState(null);
  const [showRecommendation, setShowRecommendation] = useState(false);

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

// const handleNextQuestion = () => {
//     if (selectedAnswer !== '') {
//       setUserAnswers([...userAnswers, selectedAnswer]); // Update the userAnswers here
//       setSelectedAnswer('');
//       if (currentQuestion < questions.length - 1) {
//         setCurrentQuestion(currentQuestion + 1);
//       } else {
//         // Call your API here with userAnswers
//         fetchMovieRecommendation(userAnswers);
//       }
//     }
//   };
  
  const fetchMovieRecommendation = async (answers) => {
    try {
      const response = await axios.post('api/get-movie-recommendation', { answers });
      const recommendedMovie = response.data.recommendedMovie;
  
      setRecommendedMovie(recommendedMovie);
      setShowRecommendation(true);
    } catch (error) {
      console.error('Error fetching movie recommendation:', error);
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

      <div className="container-fluid">
        <div className="card" style={{ padding: "10px", textAlign: 'center', backgroundColor: '#1F5D57',
        color: '#CBB26A' }}>
          <h2 className="card-title">{questions[currentQuestion]}</h2>
          <div className="answers" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
          <br />
          <button className="btn-circle"
          style={{ backgroundColor: '#CBB26A', width: '120px', // Adjust the width as needed
          padding: '10px', // Adjust the padding as needed
          margin: '0 auto', // Center the button horizontally
          display: 'block', // Ensure the button takes the full width
          border: "solid #CBB26A",
        }}
          onClick={handleNextQuestion}>
            {currentQuestion === questions.length - 1 ? "Restart" : "Next"}
          </button>
        </div>
      </div>
      {showRecommendation && recommendedMovie && (
        <FinalRecommendation recommendedMovie={recommendedMovie} />
      )}
    </div>
  );
};

export default QAForm;

