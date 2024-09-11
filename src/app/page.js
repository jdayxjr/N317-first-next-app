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
  return (
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


      <div className={homeStyles.productsList}>
        <div className={homeStyles.product}>
          <h3>tofu</h3>
          <p>this is defineitely tofu</p>
          <img src="https://live.staticflickr.com/7276/6984161324_a5b38c6ee2_z.jpg" alt="real picture of tofu"></img>
        </div>
        <div className={homeStyles.product}>
          <h3>waffles</h3>
          <p>this is defineitely waffles</p>
          <img src="https://live.staticflickr.com/4009/5076305577_5a5fed6a73_b.jpg"></img>
        </div>
        <div className={homeStyles.product}>
          <h3>chop cheese</h3>
          <p>this is defineitely chop cheese</p>
          <img src="https://upload.wikimedia.org/wikipedia/en/7/79/Chopped_cheese_Crotona_Bronx.jpg"></img>

        </div>

      </div>
    </main>
  );


}
