import React, { useEffect, useState } from "react";
import AuthService from "../../services/auth.service";
import { useRouter } from "next/navigation";
import { useGlobalState } from "../../context/GlobalState";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../../components/Navigation";
import Image from "next/image";
import Header from "../../components/Header";
import jwtDecode from 'jwt-decode';



function Register() {
  const { state, dispatch } = useGlobalState();
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConf: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };

  async function handleRegister(e) {
    e.preventDefault();
    AuthService.register(user);
    dispatch({
      currentUserToken: state.currentUserToken,
      currentUser: state.currentUser?.user_id,
    });
    router.push("/dashboard");
  }

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
    <div className="container-fluid" style={{
      backgroundImage: 'url("https://media.istockphoto.com/id/177274717/photo/abstract-multimedia-background-composed-of-many-images-with-copy.jpg?s=612x612&w=0&k=20&c=V0G4Z-glNKzuI1ZvQMObi3_0PuxUHOqzur7d5LXB29U=")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>

      <Navigation />
      <Header />

      <div className="w-screen h-screen">
        <div className="border-2 bg-mtgray p-4">
          <form className="border-2 bg-mtgray" onSubmit={handleRegister}>
            <div className="row mb-2">
              <div className="col">
                <label htmlFor="firstName" className="form-label text-white">First Name:</label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  id="firstName"
                  required
                  onChange={(e) => handleChange("firstName", e.target.value)}
                />
              </div>

              <div className="col">
                <label htmlFor="lastName" className="form-label text-white">Last Name:</label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  id="lastName"
                  required
                  onChange={(e) => handleChange("lastName", e.target.value)}
                />
              </div>
            </div>


            <div className="row mb-2">
              <div className="col">
                <label htmlFor="username" className="form-label text-white">Username:</label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  id="username"
                  required
                  onChange={(e) => handleChange("username", e.target.value)}
                />
              </div>

              <div className="col">

                <label htmlFor="email" className="form-label text-white">Email:</label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  id="email"
                  required
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label htmlFor="passwordConf" className="form-label text-white">Confirm Password:</label>
                <input
                  className="form-control form-control-sm"
                  type="password"
                  id="passwordConf"
                  required
                  onChange={(e) => handleChange("passwordConf", e.target.value)}
                />
              </div>
              <div className="col">
                <label htmlFor="password" className="form-label text-white">Password:</label>
                <input
                  className="form-control form-control-sm"
                  type="password"
                  id="password"
                  required
                  onChange={(e) => handleChange("password", e.target.value)}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <input
                type="submit"
                value="Register!"
                className="btn btn-primary btn-block my-2"
                disabled={
                  user.password &&
                    user.password.length >= 8 &&
                    user.password === user.passwordConf &&
                    user.firstName &&
                    user.lastName &&
                    user.email
                    ? false
                    : true
                }
              />
            </div>
          </form>
        </div>
      </div>

      <style jsx>
        {`.btn-custom{
        background-color: #1F5D57;
        color: #CBB26A;
      }
      `}
      </style>

    </div>
  );
}

export default Register;