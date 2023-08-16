import React, { useEffect, useState } from "react";
import AuthService from "../../services/auth.service";
import { useRouter } from "next/navigation";
import { useGlobalState } from "../../context/GlobalState";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../components/Header";

function Register() {
  const [state, dispatch] = useGlobalState();
  const router = useRouter();
  const [user, setUser] = useState({
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
    router.push("/");
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
<div className="d-flex w-100 align-items-center mt-5">
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
                <label htmlFor="email" className="form-label text-white">Email:</label>
                <input
                    className="form-control form-control-sm"
                    type="text"
                    id="email"
                    required
                    onChange={(e) => handleChange("email", e.target.value)}
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
            <div className="mb-3">
                <label htmlFor="passwordConf" className="form-label text-white">Confirm Password:</label>
                <input
                    className="form-control form-control-sm"
                    type="password"
                    id="passwordConf"
                    required
                    onChange={(e) => handleChange("passwordConf", e.target.value)}
                />
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





    {/* <div className="w-screen h-screen">
      <div className="flex">
        <form className="mx-auto border-2 bg-mtgray" onSubmit={handleRegister}>
          <div className="flex justify-between m-2 items-center space-x-2 text-white">
            <label htmlFor="firstName">First Name:</label>
            <input
              className="border"
              type="text"
              id="firstName"
              required
              onChange={(e) => handleChange("firstName", e.target.value)}
            />
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="lastName">Last Name:</label>
            <input
              className="border"
              type="text"
              id="lastName"
              required
              onChange={(e) => handleChange("lastName", e.target.value)}
            />
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="email">Email:</label>
            <input
              className="border"
              type="text"
              id="email"
              required
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="password">Password:</label>
            <input
              className="border"
              type="text"
              id="password"
              required
              onChange={(e) => handleChange("password", e.target.value)}
            />
          </div>
          <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="passwordConf">Confirm Password:</label>
            <input
              className="border"
              type="text"
              id="passwordConf"
              required
              onChange={(e) => handleChange("passwordConf", e.target.value)}
            />
          </div>
          <div className="flex">
            <input
              type="submit"
              value="Register!"
              className="bg-mtpurple text-white py-2 px-4 rounded-lg mx-auto my-2 font-bold disabled:opacity-60"
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
    </div> */}
    </div>
  );
}

export default Register;