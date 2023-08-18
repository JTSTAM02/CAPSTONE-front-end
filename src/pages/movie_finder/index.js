import Link from "next/link";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Header from '../../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function MovieFinderPage() {
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
<div className="d-flex align-items-center">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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
        <ul className="navbar-nav ml-auto">
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
    <div>
      <Link href="/form" />
    </div>
    </div>
  );
}

export default MovieFinderPage;
