'use client'

import React from "react";
import Link from "next/link";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";
import MovieMixerLogo from "../images/MovieMixerLogo.png";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStateProvider } from '../context/GlobalState';



function Header() {
  return (
    <div className="d-flex flex-column align-items-center text-center">
        <div>
        <h1 className=" container-fluid text-white fs-1 mb-1">Movie Mixer</h1>
        <Image className="img-fluid"
            src={MovieMixerLogo}
            alt="MovieMixer Logo"
            width={180}
            height={180} />
        </div>
    </div>
  );
}

export default Header;