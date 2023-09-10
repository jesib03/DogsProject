import React from "react";
import style from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDogs } from "../../redux/actions";
import Loading from "../../utils/Loading/Loading";
import Pagination from "../../components/Pagination/Pagination";
import Filters from "../../components/FiltersDogs/FiltersDogs";

function Home() {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);

  const cleanDataTempfromDB = (dogs) => {
    return dogs.map((dog) => ({
      ...dog,
      temperament: Array.isArray(dog.temperaments)
        ? dog.temperaments.map((t) => t.name).join(', ')
        : dog.temperament,
    }));
  };

  const processedDogs = cleanDataTempfromDB(dogs);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div className={style.homeContainer}>
      <br />
      <h1>HOME</h1>
      <br />
      <br />
      <Filters />
      {dogs.length === 0 ? <Loading /> : <Pagination dogs={processedDogs} />}
    </div>
  );
}

export default Home;
