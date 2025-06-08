// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", textAlign: "center" }}>
      <Link href="/about">About</Link> |{" "}
      <Link href="/dashboard">Dashboard</Link> |{" "}
      <Link href="/scan">Scan</Link> |{" "}
      <Link href="/pricing">Pricing</Link> |{" "}
      <Link href="/login">Login</Link>
    </nav>
  );
}