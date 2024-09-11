"use client";
import Image from "next/image";
import homeStyles from '@/app/page.module.css';


export default function Home() {
  const headerStyle = {
    backgroundColor: 'lightcoral',
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  function openModal() {
    console.log("Open");
  }

  const myName = "Jay is the best.";
  const farmAnimals = [
    "seal",
    "polar bear",
    "chimpanzee",
    "tasmanian devil",
  ]

  const person = {
    name: "Jay",
    eyeColor: "dark-brown",
    hair: "dark-brown",
    hairStyle: "locs",
  }

  const itsTuesday = true;
  const showNull = null;

  <main>
    <nav className={homeStyles.homeNav}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
    <h1 style={headerStyle}>Next.js App</h1>
    <p>null: {String(null)}</p>
    <p>is it tuesday?: {String(itsTuesday)}</p>
    <p>array of farm animals: {farmAnimals.join(", ")}</p>
    <p>Person: {JSON.stringify(person)}</p>
    <p className={homeStyles.callout}>this is a very sunny day here in RainyVille it has been the most sunniest is has been this week so far, signing off {myName}</p>
    <button onClick={openModal}>View Sun</button>
  </main>



}
