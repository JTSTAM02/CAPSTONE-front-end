import Link from "next/link";
import React, { useState, useEffect } from 'react'
import Header from '../../components/Header';
import Navigation from "../../components/Navigation";


function Page() {
    const [watchList, setWatchList] = useState([]);
    const [movieToAdd, setMovieToAdd] = useState("");


    useEffect(() => {
        const savedWatchList = localStorage.getItem("watchList");
        if (savedWatchList) {
          setWatchList(JSON.parse(savedWatchList));
        }
      }, []);

      useEffect(() => {
        localStorage.setItem("watchList", JSON.stringify(watchList));
      }, [watchList]);

    const handleAddMovie = () => {
        if(movieToAdd.trim() === " ") return;

        if (watchList.some(movie => movie.title === movieToAdd)) {
            alert("Movie is already in the watchlist.");
            setMovieToAdd("");
            return;
    }

    setWatchList([...watchList, { title: movieToAdd }]);
    setMovieToAdd("");
    };

    const handleRemoveMovie = (title) => {
        const updatedWatchList = watchList.filter(movie => movie.title !== title);
        setWatchList(updatedWatchList);
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
<div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '80%' }}>
      <div className="watchlist">
        <h2 className="text-white">My Watchlist</h2>
        <input
          type="text"
          placeholder="Enter movie title"
          value={movieToAdd}
          onChange={(e) => setMovieToAdd(e.target.value)}
          onKeyDown={(e) => {
            if(e.key === 'Enter'){
                handleAddMovie();
            }
          }}
        />             
        <button onClick={handleAddMovie}>Add Movie</button>
        <ul style={{ marginTop: '10px'}}>
          {watchList.map(movie => (
            <li key={movie.title}>
              {movie.title}
              <button onClick={() => handleRemoveMovie(movie.title)}>Remove</button>
            </li>
          ))}
        </ul>
        </div>
    </div>
            <Navigation />
            <Header />
          <Link href="/form">Find Your Movie Here:</Link>
          </div>

    )
}

export default Page