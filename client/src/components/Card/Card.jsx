import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

function Card(props) {

  return (
    <div>
      <article className={style.card}>
        <img
          src={props.image}
          alt="dog"
          style={{ width: "1920", height: "2193" }}
          className={style.cardBackground}
        />
        <div className={style.cardContent}>
          <div className={style.cardContentContainer}>
            <h2 className={style.cardTitle}>{props.name}</h2>
            <p className={style.cardDescription}>
              Temperament: {props.temperament} 
            </p>
            <p className={style.cardDescription}>Weight: {props.weight} kg</p>
          </div>
          <Link to={`/detail/${props.id}`}>
            <button type="submit" value={props.id} className={style.cardButton}>
              Read More
            </button>
          </Link>
        </div>
      </article>
    </div>
  );
}

export default Card;
