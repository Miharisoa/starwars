// import axios from "axios";
import { Dispatch } from "redux";
// import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
// import { ActionType, Action, actionLoadPopularMovies } from "./actionTypes";
import { BASE_URL } from "../constants";
// import { dispatchStore } from "./store";

export const setTitle = (newTitle) => {
  return async (dispacth) => {
    dispacth({
      type: "SET_TITLE",
      payload: newTitle,
    });
    if (newTitle.length > 0) {
      const url = BASE_URL + newTitle;
      const newType = getType(newTitle);
      try {
        const response = await fetch(url);
        const { results } = await response.json();
        dispacth({
            type: newType,
            payload: results
        })
      } catch (err) {
        console.log("LOG ::: ERROR >>> ", err);
      }
    }
  };
};

const getType = (title) => {
  switch (title) {
    case "films":
      return "SET_MOVIES";
    case "people":
      return "SET_PEOPLES";
    case "species":
      return "SET_SPECIES";
    case "starships":
      return "SET_STARSHIPS";
    case "vehicles":
      return "SET_VEHICLES";
    case "planets":
      return "SET_PLANETS";
    default:
      return "";
  }
};

// export const setPopularMovies = () => {
//   return async (dispatch) => {
//     // dispatch({
//     //     type: ActionType.SET_POPULAR_MOVIES
//     // });
//     const url = BASE_URL + "movie/popular?api_key=" + TM_DB_API_KEY;

//     try {
//       const response = await fetch(url);
//       const { results } = await response.json();

//       console.log("DATA AFTER AXIOS >>> ", results);

//       dispatch({
//         type: ActionType.SET_POPULAR_MOVIES,
//         payload: results,
//       });
//     } catch (err) {
//       console.log("THERE IS ERROR >>> ", err);
//     }
//   };
// };

// export const setParticularMovie = (id: number) => {
//   return async (dispatch: Dispatch<Action>) => {
//     const url = BASE_URL + "movie/" + id + "?api_key=" + TM_DB_API_KEY;

//     try {
//       const response = await fetch(url);
//       const movie = await response.json();

//       console.log("movie AFTER AXIOS >>> ", movie);

//       dispatch({
//         type: ActionType.SET_PARTICULAR_MOVIE,
//         payload: movie,
//       });
//     } catch (err) {
//       console.log("THERE IS ERROR >>> ", err);
//     }
//   };
// };
