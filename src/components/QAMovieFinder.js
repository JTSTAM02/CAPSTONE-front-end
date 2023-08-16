import React, { useState } from "react";
import axios from "axios";

function QAMovieFinder() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [movies, setMovies] = useState([]);

  const questions = [
    // List of questions and their options
    {
      question: "What genre of movie do you want to watch?",
      options: ["Action", "Comedy", "Drama", "Sci-Fi"],
    },
    {
        question: "What decades of movies are your favorite?",
        options: ["1920s", "1930s", "1940s", "1950s", "1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"],
      },
      {
        question: "Who are some of your favorite actors?",
        options: ["Tom Hanks", "Meryl Streep", "Leonardo DiCaprio", "Jennifer Lawrence", "Brad Pitt", "Emma Watson"],
      },
      {
        question: "Who are some of your favorite directors?",
        options: ["Martin Scorsese", "Steven Spielberg", "Christopher Nolan", "Quentin Tarantino", "Greta Gerwig", "James Cameron"],
      },
      {
        question: "How long do you feel like watching a movie?",
        options: ["Short (under 90 minutes)", "Medium (90-120 minutes)", "Long (over 2 hours)"],
      },
      {
        question: "What mood are you in?",
        options: ["Exciting", "Happy", "Sad", "Thoughtful", "Scary"],
      },
      {
        question: "What rating movie do you want to watch?",
        options: ["G", "PG", "PG-13", "R"],}
  ];

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers, [currentQuestion]: answer };
    setAnswers(newAnswers);

    if (currentQuestion === questions.length - 1) {
      // Fetch movie recommendations based on answers
      axios
        .get("/api/get_movie_recommendations", { params: newAnswers })
        .then((response) => {
          setMovies(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>Recommended Movies:</h2>
          <ul>
            {movies.map((movie, index) => (
              <li key={index}>{movie.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default QAMovieFinder;

