import React from "react";
import style from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getDogById } from "../../redux/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const dispatch = useDispatch();

  const { id } = useParams();
  console.log(id);

  const { name, image, weight, height, lifeSpan, life_expectancy, temperament, temperaments } = useSelector(
    (state) => state.dogs
  );

  useEffect(() => {
    dispatch(getDogById(id));
  }, [dispatch, id]);

  return (
    <div className={style.mainContainer}>

    <div className={style.dogCard}>
      <div className={style.decorContainer}>
        <div className={style.dogPic}>
          <img className={style.image} src={image} alt="dog" />
        </div>
        <p className={style.dogDecorRight}>🐶</p>
        <p className={style.dogDecorLeft}>🍖</p>
      </div>
      <div>
        <h1 className={style.dogBanner}>
          <span>{name}</span>
        </h1>
      </div>
      <div className={style.detailContainer}>
        <p>ID: {id}</p>
        <p>Weight: {weight} kg</p>
        <p>Height: {height} cm</p>
        <p>Life Expectancy: {lifeSpan || life_expectancy}</p>
        <p>Temperaments: {temperament || temperaments.map((t) => t.name).join(", ")}</p>
        <p className={style.dogDecorBottom}>♥️</p>
      </div>
    </div>
    </div>
  );
}


export default Detail;
