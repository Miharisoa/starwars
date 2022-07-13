// import { Action, ActionType, ApplicationState, Movie } from "./actionTypes";

const initialState = {
  title: "",
  movies: [],
  peoples: [],
  species: [],
  planets: [],
  starships: [],
  vehicles: [],
  currentObject: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_MOVIES":
      return { ...state, movies: action.payload };
    case "SET_PEOPLES":
      return { ...state, peoples: action.payload };
    case "SET_SPECIES":
      return { ...state, species: action.payload };
    case "SET_PLANETS":
      return { ...state, planets: action.payload };
    case "SET_STARSHIPS":
      return { ...state, starships: action.payload };
    case "SET_VEHICLES":
      return { ...state, vehicles: action.payload };
    case "SET_OBJECT":
      return { ...state, currentObject: action.payload };
    default:
      return state;
  }
};
