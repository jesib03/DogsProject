import {
  GET_DOGS,
  GET_DOGS_BY_NAME,
  GET_DOG_BY_ID,
  GET_TEMPERAMENTS,
  POST_DOG,
  FILTER_BY_TEMPERAMENT,
  SORT_DOGS_ALPHABETICAL_ASC,
  SORT_DOGS_ALPHABETICAL_DESC,
  SORT_DOGS_WEIGHT_ASC,
  SORT_DOGS_WEIGHT_DESC,
} from "./actions";

const initialState = {
  dogs: [],
  temperaments: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload };
    case GET_TEMPERAMENTS:
      return { ...state, temperaments: action.payload };
    case POST_DOG:
      return { ...state, dogs: [...state.dogs, action.payload] };
    case GET_DOGS_BY_NAME:
      return { ...state, dogs: action.payload };
    case GET_DOG_BY_ID:
      return { ...state, dogs: action.payload };
    case FILTER_BY_TEMPERAMENT:
      return { ...state, dogs: action.payload };
    case SORT_DOGS_ALPHABETICAL_ASC:
      return { ...state, dogs: action.payload };
    case SORT_DOGS_ALPHABETICAL_DESC:
      return { ...state, dogs: action.payload };
    case SORT_DOGS_WEIGHT_ASC:
      return { ...state, dogs: action.payload };
    case SORT_DOGS_WEIGHT_DESC:
      return { ...state, dogs: action.payload };
    default:
      return { ...state };
  }
};
export default rootReducer;
