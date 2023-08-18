import Link from "next/link";
import Image from "next/image";
import MovieMixerLogo from "../images/MovieMixerLogo.png";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";
import axios from "axios";

export default function Page() {
  const [randomMovie, setRandomMovie] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false); // Add this state


  const getRandomMovie = () => {
    fetchRandomMovie();
  };

  const fetchRandomMovie = () => {
    axios.get('http://localhost:8000/api/get_random_movie/')
      .then(response => {
        const results = response.data.results;
        const randomIndex = Math.floor(Math.random() * results.length);
        setIsModalVisible(true); // Show the modal when random movie is fetched
        setRandomMovie(results[randomIndex]);
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
    }}>

        <button className="btn btn-custom p-2 mt-5 mb-1 btn-lg" onClick= {getRandomMovie}>Get Random Movie</button>
        
        {isModalVisible && randomMovie && (
          <div className="movie-info">
            <div className="modal-content">
              <div className="modal-header">
              <h2>Your Random Movie Is:</h2>
          </div>
        <div className="modal-body">
          <p>{randomMovie.titleText.text}</p>
        </div>
        <div className="modal-footer">
        <button onClick={() => setIsModalVisible(false)}>Close</button>
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
        

        <Link href="/dashboard" legacyBehavior><a className="btn btn-custom mt-4 m-2">Dashboard</a></Link>
        <Link href="/login" legacyBehavior><a className="btn btn-custom m-2">Login</a></Link>
        <Link href="/register" legacyBehavior><a className="btn btn-custom m-2">Sign Up-It's Free!</a></Link>

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
        position: fixed;
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
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  
      .modal-header {
        margin-bottom: 10px; /* Add space below header */
      }
  
      .modal-footer {
        margin-top: 20px; /* Add space above footer */
        display: flex;
        justify-content: center;
      }

      .movie-info {
        background-color: #1F5D57; /* Set the background color */
        color: #CBB26A; /* Set the text color */
        padding: 20px; /* Add some padding for spacing */
        border-radius: 10px; /* Add rounded corners */
        margin-top: 20px; /* Add spacing from the button */
        text-align: center; /* Center the text */
        width: 80%;
        max-width: 600px;
        height: auto;
      }
  
      
      `}
    </style>
    
    </div>
  );
  }