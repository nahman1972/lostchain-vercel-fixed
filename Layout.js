// components/Layout.js
import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>LostChain</title>
        <meta name="description" content="Recover your lost crypto assets easily with LostChain." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}