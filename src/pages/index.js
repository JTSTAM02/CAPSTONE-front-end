import Link from "next/link";
import Image from "next/image";
import MovieMixerLogo from "../images/MovieMixerLogo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import axios from "axios";

export default function Page() {
  const [randomMovie, setRandomMovie] = useState(null);

  const getRandomMovie = () => {
    axios.get('http://localhost:8000/api/get_random_movie/')
      .then(response => {
        setRandomMovie(response.data);
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

        <button className="btn btn-custom p-2 mt-5" onClick= {getRandomMovie}>Get Random Movie</button><hr></hr>
        
        {randomMovie && (
          <div className="movie-info">
            <h2>Title: {randomMovie.title}</h2>
            <p>Release Date: {randomMovie.release_date}</p>

            </div>
        )}
        
        
        
        <div className={'flex-column justify-content-center align-items-center'}>
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
      {/* <Link href="/about" legacyBehavior><a className="btn btn-info">About</a></Link> */}
    <style jsx>
      {`.btn-custom{
        background-color: #1F5D57;
        color: #CBB26A;
      }`}
    </style>
    
    </div>
  );
  }