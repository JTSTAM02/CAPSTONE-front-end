import Link from "next/link";
import Image from "next/image";
import MovieMixerLogo from "../images/MovieMixerLogo.png";
import { useState } from "react";
import axios from "axios";

export default function Page() {
  const [randomMovie, setRandomMovie] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [trailers, setTrailers] = useState(null);
  const languageMapping = {
    'en-US': 'English',
  };

  const fetchRandomMovie = () => {
    axios.get('http://localhost:8000/api/get_random_movie/')
      .then(response => {
        const results = response.data.results;
        const randomIndex = Math.floor(Math.random() * results.length);
        const movieId = results[randomIndex].id;
        fetchMovieTrailers(movieId);
        setIsModalVisible(true);
        setRandomMovie(results[randomIndex]);
        console.log(movieId);
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  const fetchMovieTrailers = (movieId) => {
    axios.get(`http://localhost:8000/api/get_trailers/${movieId}`)
      .then(response => {
        console.log(response.data)
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

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center" style={{
      backgroundImage: 'url("https://media.istockphoto.com/id/177274717/photo/abstract-multimedia-background-composed-of-many-images-with-copy.jpg?s=612x612&w=0&k=20&c=V0G4Z-glNKzuI1ZvQMObi3_0PuxUHOqzur7d5LXB29U=")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>

        <button className="btn btn-custom p-2 mt-5 mb-1 btn-lg" onClick= {fetchRandomMovie}>Get Random Movie</button>

        {isModalVisible && randomMovie && (
          <div className="movie-modal d-flex justify-content-center align-items-center">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
              <h2>Your Random Movie Is:</h2>
          </div>
          <div className="modal-body" style={{ maxWidth: '700px', overflow: 'auto'}}>
          <div className="d-flex flex-column align-items-center">
  <p className="text-center mb-4" style={{ fontSize: "2rem", fontWeight: 'bolder' }}>{randomMovie.titleText.text}</p>
  
  {randomMovie.releaseYear && (
    <div>
    {/* <p className="mb-2">Year of Release: {randomMovie.releaseYear.year}</p> */}
    <p className="text-center">Genre: {randomMovie.genres.genres[0].text}</p>
    <p>Runtime: {Math.floor(randomMovie.runtime.seconds / 3600)} hours {Math.floor((randomMovie.runtime.seconds % 3600) / 60)} minutes</p>
    </div>
  )}
  
  {randomMovie.primaryImage && (
    <div className="d-flex justify-content-center mb-3">
      <img src={randomMovie.primaryImage.url} alt="Movie Poster" className="img-fluid" style={{ maxWidth: '200px', height: '300px' }} />
    </div>
  )}
  
  {randomMovie.primaryImage && randomMovie.primaryImage.caption && (
    <div>
    <p className="text-center">{randomMovie.primaryImage.caption.plainText}</p>
    <p className="text-center">Description: {randomMovie.plot.plotText.plainText}</p>
    <p className="text-center">Watch the Trailer Here:{" "}<a href={trailers} target="_blank" rel="noopener noreferrer">{trailers} </a></p>    
                <p className="text-center">Language: {languageMapping[randomMovie.plot.language.id]}</p>
    </div>
  )}

        <div className="modal-footer">
        <button className="btn btn-custom" onClick={() => setIsModalVisible(false)}>Close</button>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
)}
 
          <div className="d-flex justify-content-center align-items-center">
            <Image className="img-fluid"
              src={MovieMixerLogo}
              alt="MovieMixer Logo"
              width={200}
              height={200}
            />
          </div>
        

        <Link href="/login" legacyBehavior><a className="btn btn-custom m-2">Login</a></Link>
        <Link href="/register" legacyBehavior><a className="btn btn-custom">Sign Up-It's Free!</a></Link>

      <br></br>
    <style jsx>
      {`.btn-custom{
        background-color: #1F5D57;
        color: #CBB26A;
      }
      
      .text-custom {
        color: #CBB26A;
        font-size: 18px;
        font-weight: bold;
      }
      .movie-modal {
        top: 0;
        left: 0;        
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }
      .modal-content {
        background-color: white;
        padding: 10px;
        border: solid 10px #1F5D57;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  
      .modal-header {
        margin-bottom: 5px; /* Add space below header */
      }
  
      .modal-footer {
        margin-top: 5px; /* Add space above footer */
        display: flex;
        justify-content: center;
      }

      .movie-info {
        background-color: #1F5D57; /* Set the background color */
        color: #CBB26A; /* Set the text color */
        padding: 20px; /* Add some padding for spacing */
        border-radius: 5px; /* Add rounded corners */
        margin-top: 20px; /* Add spacing from the button */
        text-align: center; /* Center the text */
        width: 80%;
        max-width:600px;
        height: auto;
      }
  
      
      `}
    </style>
    
    </div>
  );
  }