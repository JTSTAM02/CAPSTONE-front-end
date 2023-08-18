import Link from "next/link";
import React, { useState } from 'react'
import Header from '../../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../../components/Navigation";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Page() {
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
            <Navigation />
            <Header />
            <Link href="/form">Find Your Movie Here:</Link>
        </div>
    )
}

export default Page