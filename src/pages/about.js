import Link from "next/link";

export default function About() {
    return <div>
      <h1>About</h1>
      <Link href="/dashboard">Dashboard</Link>
      <br></br>
      <Link href="/">Home</Link>
  </div>
  }