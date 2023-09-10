import React, { useEffect } from "react";
import style from "./FiltersDogs.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getDogsByTemperament,
  getTemperaments,
  getDogsAlphabeticalAsc,
  getDogsAlphabeticalDesc,
  getDogsWeightAsc,
  getDogsWeightDesc,
} from "../../redux/actions";

function Filters() {
  const temperaments = useSelector((state) => state.temperaments).sort(
    function (a, b) {
      if (a < b) return -1;
      else return 1;
    }
  );

  const dispatch = useDispatch();

  useEffect(() => {
    //useEffect escucha los cambios del componente
    dispatch(getTemperaments()); //dispatch trae la info
  }, [dispatch]);

  const handleSelectTemp = (e) => {
    const value = e.target.value;
    dispatch(getDogsByTemperament(value));
  };

  const handleSortAlphabeticalAsc = (e) => {
    dispatch(getDogsAlphabeticalAsc());
  };

  const handleSortAlphabeticalDesc = (e) => {
    dispatch(getDogsAlphabeticalDesc());
  };

  const handleSortWeightAsc = (e) => {
    dispatch(getDogsWeightAsc());
  };

  const handleSortWeightDesc = (e) => {
    dispatch(getDogsWeightDesc());
  };

  return (
    <div className={style.filtersContainerDogs}>
      <div className={style.section}>
        <h3 className={style.title}>Filters</h3>
        <select className={style.select} onChange={handleSelectTemp}>
          <option value="">Filter by temperament</option>
          {temperaments.map((temp) => {
            return (
              <option key={temp} value={temp}>
                {temp}
              </option>
            );
          })}
        </select>
        <div className={style.buttonsContainer}>
          <button className={style.button} onClick={handleSortAlphabeticalAsc}>
            Sort A-Z 🐾
          </button>
          <button className={style.button} onClick={handleSortAlphabeticalDesc}>
            Sort Z-A 🐾
          </button>
          <button className={style.button} onClick={handleSortWeightAsc}>
            Sort by Weight (Asc) 🐾
          </button>
          <button className={style.button} onClick={handleSortWeightDesc}>
            Sort by Weight (Desc) 🐾
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
