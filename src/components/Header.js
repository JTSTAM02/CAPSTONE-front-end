import React from "react";
import MovieMixerLogo from "../images/MovieMixerLogo.png";
import Image from "next/image";

function Header() {
  return (
    <div className="container-fluid d-flex flex-column align-items-center text-center">
        <Image className="rounded-img"
            src={MovieMixerLogo}
            alt="MovieMixer Logo"
            width={180}
            height={180} />

    </div>
  );
}

export default Header;