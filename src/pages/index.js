import Link from "next/link";
import Image from "next/image";
import MovieMixerLogo from "../images/MovieMixerLogo.png";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Page() {
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

        <button className="btn btn-primary p-2 mt-5">Get Random Movie</button><hr></hr>
        <div className={'flex-column justify-content-center align-items-center'}>
          <Image className="img-fluid"
            src={MovieMixerLogo}
            alt="MovieMixer Logo"
            width={200}
            height={200}
          />
        </div>

      <Link href="/dashboard">Dashboard</Link>
      <br></br>
      <Link href="/about">About</Link>
    </div>
  );
  }