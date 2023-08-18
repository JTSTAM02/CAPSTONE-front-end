"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState';
import authService from '../../services/auth.service';
import jwtDecode from 'jwt-decode';
import Header from '../../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../../components/Navigation';


function Page() {
    const router = useRouter();

    const {state, dispatch} = useGlobalState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        const username = email;
        authService
            .login(email, password, username)
            .then(async (resp) => {
                console.log(resp)
                let data = jwtDecode(resp.access);
                await dispatch({
                    currentUserToken: resp.access,
                    currentUser: data
                });
                router.push('/dashboard');
            });
    
    }

    // function handleLogin(e) {
    //     e.preventDefault();
    //     // console.log(email.current.value , password.current.value , "HERE")
    //     authService
    //         .login(email, password)
    //         .then(async (resp) => {
    //             console.log(resp)
    //             let data = jwtDecode(resp.access)
    //             await dispatch({
    //                 currentUserToken: resp.access,
    //                 currentUser: data
    //             })
    //             router.push('/dashboard')
    //         });
    // }


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
            <Header />
            <Navigation />
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