import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import { useGlobalState } from '../../context/GlobalState';
import authService from '../../services/auth.service';
import jwtDecode from 'jwt-decode';
import Header from '../../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../../components/Navigation';

function Page() {
    const router = useRouter();

    const { state, dispatch } = useGlobalState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        authService
            .login(email, password, username)
            .then(async (resp) => {
                console.log(resp);
                let data = jwtDecode(resp.access);
                const { username } = data;
                localStorage.setItem('access_token', resp.access);
                localStorage.setItem('refresh_token', resp.refresh);
                await dispatch({
                    currentUserToken: resp.access,
                    currentUser: data
                });
                router.push('/dashboard');
            });
    };

    useEffect(() => {
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
    }, []);

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
            <form onSubmit={handleLogin} className="max-w-md mx-auto"
            >
                <div className='row m-2 text-white'>
                    <label htmlFor="username">Username:</label>
                    <input
                        className='form-control'
                        type="text"
                        id="username"
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

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