import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const GET_DOG_BY_ID = "GET_DOG_BY_ID";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const POST_DOG = "POST_DOG";
export const GET_DOGS_BY_NAME = "GET_DOGS_BY_NAME";
export const FILTER_BY_TEMPERAMENT = "FILTER_BY_TEMPERAMENT";
export const SORT_DOGS_ALPHABETICAL_ASC = "SORT_DOGS_ALPHABETICAL_ASC";
export const SORT_DOGS_ALPHABETICAL_DESC = "SORT_DOGS_ALPHABETICAL_DESC";
export const SORT_DOGS_WEIGHT_ASC = "SORT_DOGS_WEIGHT_ASC";
export const SORT_DOGS_WEIGHT_DESC = "SORT_DOGS_WEIGHT_DESC";

export const getDogs = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/dogs");
    const dogs = apiData.data;
    return dispatch({
      type: GET_DOGS,
      payload: dogs,
    });
  };
};

export const getDogById = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/dogs/${id}`);
    const dog = apiData.data;
    return dispatch({
      type: GET_DOG_BY_ID,
      payload: dog,
    });
  };
};

export const getTemperaments = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/temperaments");
    const temperaments = apiData.data;
    return dispatch({
      type: GET_TEMPERAMENTS,
      payload: temperaments,
    });
  };
};

export const postDog = (dog) => {
  const endpoint = "http://localhost:3001/dogs";
  return async (dispatch) => {
    const { data } = await axios.post(endpoint, dog);
    return dispatch({
      type: POST_DOG,
      payload: data,
    });
  };
};

export const getDogsByName = (name) => {
  const endpoint = `http://localhost:3001/dogs/name/?name=${name}`;
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      if (data.error) {
        alert(data.error);
      } else {
        return dispatch({
          type: GET_DOGS_BY_NAME,
          payload: data,
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
};

export const getDogsByTemperament = (temperament) => {
  return async function (dispatch) {
    const apiData = await axios("http://localhost:3001/dogs");
    const dogs = apiData.data;
    let filteredDogs = dogs.filter((dog) => {
      return dog.temperament?.includes(temperament);
    });
    return dispatch({
      type: FILTER_BY_TEMPERAMENT,
      payload: filteredDogs,
    });
  };
};

export const getDogsAlphabeticalAsc = () => {
  return async function (dispatch) {
    const apiData = await axios("http://localhost:3001/dogs");
    const dogs = apiData.data;
    let sortedDogs = dogs.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (b.name > a.name) {
        return -1;
      }
      return 0;
    });
    return dispatch({
      type: SORT_DOGS_ALPHABETICAL_ASC,
      payload: sortedDogs,
    });
  };
};

export const getDogsAlphabeticalDesc = () => {
  return async function (dispatch) {
    const apiData = await axios("http://localhost:3001/dogs");
    const dogs = apiData.data;
    let sortedDogs = dogs.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      if (b.name > a.name) {
        return 1;
      }
      return 0;
    });
    return dispatch({
      type: SORT_DOGS_ALPHABETICAL_DESC,
      payload: sortedDogs,
    });
  };
};

export const getDogsWeightAsc = () => {
  return async function (dispatch) {
    const apiData = await axios("http://localhost:3001/dogs");
    const dogs = apiData.data;
    let sortedDogs = dogs.sort((a, b) => {
      if (a.weight > b.weight) {
        return 1;
      }
      if (b.weight > a.weight) {
        return -1;
      }
      return 0;
    });
    return dispatch({
      type: SORT_DOGS_WEIGHT_ASC,
      payload: sortedDogs,
    });
  };
};

export const getDogsWeightDesc = () => {
  return async function (dispatch) {
    const apiData = await axios("http://localhost:3001/dogs");
    const dogs = apiData.data;
    let sortedDogs = dogs.sort((a, b) => {
      if (a.weight > b.weight) {
        return -1;
      }
      if (b.weight > a.weight) {
        return 1;
      }
      return 0;
    });
    return dispatch({
      type: SORT_DOGS_WEIGHT_DESC,
      payload: sortedDogs,
    });
  };
};
