// import { Action, ActionType, ApplicationState, Movie } from "./actionTypes";

const initialState = {
  title: "Home",
  movies: [],
  peoples: [],
  species: [],
  planets: [],
  starships: [],
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
    // case ActionType.GET_POPULAR_MOVIES:
    //   return state;
    // case ActionType.SET_POPULAR_MOVIES:
    //   return {
    //     ...state,
    //     popularMovies: action.payload,
    //   };
    // case ActionType.SET_PARTICULAR_MOVIE:
    //   return {
    //     ...state,
    //     particularMovie: action.payload,
    //   };
    default:
      return state;
  }
};
