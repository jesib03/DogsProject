import React from "react";
import style from "./Landing.module.css";
import backgroundImage from "/Users/macbook/Desktop/HENRY/ProyectoDogs/CLIENT/src/views/Landing/backgrounddogs.png";
import { Link } from "react-router-dom";

function Landing() {
  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
  };

  return (
    <div className={style.welcomePage} style={backgroundStyles}>
      <div className={style.contentContainer}>
        <h1 className={style.title}>PAWS AND DISCOVER</h1>
        <Link to="/home">
          <button className={style.button}>GO!</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
