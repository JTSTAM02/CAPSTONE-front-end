import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState';
import authService from '../../services/auth.service';
import jwtDecode from 'jwt-decode';
import Header from '../../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function Page() {
    const router = useRouter();

    const [ state, dispatch ] = useGlobalState();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();
        // console.log(email.current.value , password.current.value , "HERE")
        authService
            .login(email, password)
            .then(async (resp) => {
                console.log(resp)
                let data = jwtDecode(resp.access)
                await dispatch({
                    currentUserToken: resp.access,
                    currentUser: data
                })
                router.push('/dashboard')
            });
    }


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
{/*-----------------------------Navbar------------------------------------------------------------------------------- */}
<div className="d-flex w-100 align-items-center">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Movie Mixer</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register">Sign Up</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/dashboard">Dashboard</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
            <Header />
            <form onSubmit={handleLogin} className= "max-w-md mx-auto"
                >
                    <div className='row m-2 text-white'>
                        <label htmlFor="email">Email:</label>
                        <input
                            className='form-control'
                            type="text"
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        </div>
                    <div className='row m-2 text-white'>
                        <label htmlFor="pass">Password</label>
                        <input
                            className='form-control'
                            type="password"
                            id="pass"
                            name="password"
                            minLength="8"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='row'>
                        <div className='col text-center'>
                        <input
                            className="btn btn-primary btn-block mt-2"
                            type="submit"
                            value="Sign in"
                        />
                        </div>
                    </div>
                </form>
        </div>
    )
}

export default Page