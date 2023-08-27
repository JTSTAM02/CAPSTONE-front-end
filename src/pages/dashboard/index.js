import React, { useEffect, useState } from 'react';
import TopRatedMovies from '/src/components/TopRatedMovies';
import CommunityReviews from '/src/components/CommunityReviews';
import LoggedInNavigation from '/src/components/LoggedInNavbar';
import MovieMixerLogo from "/src/images/MovieMixerLogo.png";
import Link from "next/link";
import Image from 'next/image';
import jwtDecode from 'jwt-decode';
import { useGlobalState } from '../../context/GlobalState';


function Dashboard() {
  //----------------------------------Community Reviews Upcoming-------------------------------------------------------------------------------------
  // const [communityReviews, setCommunityReviews] = useState([]);

  // useEffect(() => {
  //     fetchCommunityReviews();
  //   }, []);

  //   const fetchCommunityReviews = async () => {
  //     try {
  //       const response = await axios.get('/api/get_community_reviews');
  //       setCommunityReviews(response.data.reviews);
  //     } catch (error) {
  //       console.error('Error fetching community reviews:', error);
  //     }
  //   };

  const [topMovies, setTopMovies] = useState([]);

  const { state, dispatch } = useGlobalState();

  //----------------------------------Retrieve User Data for Login-------------------------------------------------------------------------------------
  useEffect(() => {
    // Function to retrieve user data from local storage
    const getUserFromLocalStorage = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = jwtDecode(userData);
        console.log('User data:', user);
        dispatch({
          type: 'SET_USER',
          payload: user
        });
      }
    };
    getUserFromLocalStorage();
  }, [])


  return (
    <div className='container-fluid text-center bg-cover d-flex flex-column justify-content-center align-items-center' style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80")',
      // backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfUQqtN62oKB4gl6rzhNfOqwxX-Q74bUxZ0oTopsz1CM0DkLk0RhBlOYKbvGsGA4ojN0&usqp=CAU")',
      // backgroundImage: 'url("https://t4.ftcdn.net/jpg/02/71/50/69/360_F_271506927_WWFfd92jDIIDx6DgMflakU14o5jRPgBm.jpg")',
      // backgroundImage: 'url("https://st.depositphotos.com/1007879/3004/v/450/depositphotos_30049933-stock-illustration-blank-photo-video-template.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }}>
      <LoggedInNavigation />

      <h1 className='text-center text-white mt-5'>Movie Mixer Community</h1>
      <div className='text-white'>
        <div className='row'>
          <div className='col'>
            <TopRatedMovies />
          </div>
          <div className='col d-flex flex-column align-items-center'>
            <div className="logo-container">
              <Image className="img-fluid"
                src={MovieMixerLogo}
                alt="MovieMixer Logo"
                width={300}
                height={300} />

            </div>
            <div className='form-link'>
              <Link
                href='/form'>Find Your Movie Here!</Link>
              {/* <CommunityReviews reviews={communityReviews}/> */}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`

.logo-container {
  margin-top: 5px;
  margin-left: 50px;
  margin-bottom: 20px;
}     


.container-fluid {
  /* Set min-height to accommodate initial content */
  min-height: 100vh; 
   margin-top: 50px;
  margin-bottom: 20px;
  background-color: #000;
  background-image: url("your-image-url-here");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
      .form-link {
        margin-left: 50px;
        font-size: 40px;
        color: white;
        text-decoration: underline;
        transition: color 0.3s;
      }
      .form-link:hover {
        color: #CBB26A;
      }

      @media (max-width: 768px) {
        .movie-item {
          flex: unset; /* Turn off the flex property for small screens */
          width: 100%; /* Set width to occupy full container width */
        }
      }

      @media (max-width: 393px) {
        .logo-container {
          margin: 0 auto; /* Center the logo horizontally */
          margin-top: 20px; /* Add a small top margin */
        }
      }

      @media (max-width: 393px) {
        .form-link {
          margin-right: 60px;
        }
      }


    `}</style>
    </div>
  );
}
export default Dashboard;