import { useState, useEffect } from "react";
import axios from "axios";

function MovieComponent() {
  const [movieTitles, setMovieTitles] = useState([]);

  useEffect(() => {
    async function fetchMovieTitles() {
      try {
        const response = await axios.get("/api/get_random_movie"); // Replace with your Django API endpoint
        setMovieTitles(response.data.results); // Access the 'results' array
      } catch (error) {
        console.error("Error fetching movie titles:", error);
      }
    }

    fetchMovieTitles();
  }, []);

  return (
    <div>
      <ul>
        {movieTitles.map((movie, index) => (
          <li key={index}>{movie.titleText.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieComponent;




//   
//function MovieComponent() {
//   const [randomMovie, setRandomMovie] = useState(null);

//   const getRandomMovie = async () => {
//     try {
//       const response = await axios.get("https://moviesdatabase.p.rapidapi.com/titles/random", {
//         headers: {
//           "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
//           'X-RapidAPI-Key': 'ede169c197msh94c9ec518d4a5e2p18d147jsn10e88d3b6b4b',
//         },
//       });

//       setRandomMovie(response.data);
//     } catch (error) {
//       console.error("Error fetching random movie:", error);
//     }
//   };

// return (
//     <div>
//       <button onClick={getRandomMovie}>Get Random Movie</button>
//       {randomMovie && (
//         <div>
//           <h2>{randomMovie.title}</h2>
//           <p>{randomMovie.release_date}</p>
//         </div>
//       )}
//     </div>
//   );

// export default MovieComponent;