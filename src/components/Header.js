import React from "react";
import Link from "next/link";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";
import MovieMixerLogo from "../images/MovieMixerLogo.png";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  const [state, dispatch] = useGlobalState();

  return (
    <div className="d-flex flex-column align-items-center text-center">
        <div>
        <h1 className="text-white fs-3 mb-1">Movie Mixer</h1>
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