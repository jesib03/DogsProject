import React, { useEffect } from "react";
import { useState } from "react";
import style from "./Form.module.css";
import Validate from "../../utils/ValidateForm";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, postDog } from "../../redux/actions";

function Form() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments).sort(
    function (a, b) {
      if (a < b) return -1;
      else return 1;
    }
  );

  const initialState = {
    name: "",
    image: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    life_expectancy: "",
    temperaments: [],
  };

  const [form, setForm] = useState(initialState);

  const [errors, setErrors] = useState(initialState);

  useEffect(() => {
    //useEffect escucha los cambios del componente
    dispatch(getTemperaments()); //dispatch trae la info
  }, [dispatch]);

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({
      ...form,
      [property]: value,
    });

    Validate(
      {
        ...form,
        [property]: value,
      },
      errors,
      setErrors
    );
  };

  const handleSelect = (event) => {
    setForm({
      ...form,
      temperaments: [...form.temperaments, event.target.value],
    });
  };

  const handleDelete = (element) => {
    setForm({
      ...form,
      temperaments: form.temperaments.filter((temp) => temp !== element),
    });
  };

  const turnedDog = () => {
    return {
      name: form.name,
      image: form.image,
      height: `${form.height_min} - ${form.height_max}`,
      weight: `${form.weight_min} - ${form.weight_max}`,
      life_expectancy: form.life_expectancy,
      temperaments: form.temperaments,
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const createdDog = turnedDog();
    dispatch(postDog(createdDog));
    alert("The dog was succesfully created");
    setForm(initialState);
  };

  return (
    <div className={style.container}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        crossOrigin="anonymous"
      />
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className={style.form}
      >
        <h2 className={style.title}>CREATE A DOG</h2>
        <div>
          <label>Name</label>
          <i className="fas fa-dog"></i>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Write the name of a dog"
            value={form.name}
            onChange={handleChange}
          ></input>
          {errors.name && <p className={style.error}>{errors.name}</p>}
        </div>
        <div>
          <label>Image URL</label>
          <i class="fas fa-images"></i>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
          ></input>
          {errors.image && <p className={style.error}>{errors.image}</p>}
        </div>
        <div>
          <label>Height</label>
        </div>
        <div className={style.heightInputContainer}>
          <input
            className={style.minMax}
            type="number"
            name="height_min"
            placeholder="Minimum height"
            value={form.height_min}
            onChange={handleChange}
          />
          <i class="fas fa-ruler"></i>
          <input
            className={style.minMax}
            type="number"
            name="height_max"
            id="maxHeight"
            placeholder="Maximum height"
            value={form.height_max}
            onChange={handleChange}
          />
        </div>
        {errors.height && <p className={style.error}>{errors.height}</p>}
        <div>
          <label>Weight</label>
        </div>
        <div className={style.heightInputContainer}>
          <input
            className={style.minMax}
            type="number"
            name="weight_min"
            placeholder="Minimum weight"
            value={form.weight_min}
            onChange={handleChange}
          />
          <i className="fas fa-weight"></i>
          <input
            className={style.minMax}
            type="number"
            name="weight_max"
            placeholder="Maximum weight"
            value={form.weight_max}
            onChange={handleChange}
          />
        </div>
        {errors.weight && <p className={style.error}>{errors.weight}</p>}
        <div>
          <label>Life Expectancy</label>
          <i className="fas fa-heartbeat"></i>
          <input
            type="text"
            name="life_expectancy"
            id="life_expectancy"
            placeholder="Example: 12 - 15 years"
            value={form.life_expectancy}
            onChange={handleChange}
          />
          {errors.life_expectancy && (
            <p className={style.error}>{errors.life_expectancy}</p>
          )}
        </div>
        <div className={style.Section}>
          <label>Temperaments</label>
          <select
            onChange={(e) => handleSelect(e)}
            className={style.styled_select}
            title="Select a temperament"
          >
            <option disabled selected value="">
              Select a temperament
            </option>
            {temperaments.map((temp) => {
              return (
                <option key={temp} name={temp}>
                  {temp}
                </option>
              );
            })}
          </select>
          <div className={style.sidebar_box}>
            {form.temperaments.map((el) => (
              <div key={el} className={style.selectedItems}>
                <h5>You have selected:</h5>
                <p>{el}</p>
                <button onClick={() => handleDelete(el)}>x</button>
              </div>
            ))}
          </div>
        </div>
        <button className={style.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
