// import axios from "axios";
import { Dispatch } from "redux";
// import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
// import { ActionType, Action, actionLoadPopularMovies } from "./actionTypes";
import { BASE_URL } from "../constants";
// import { dispatchStore } from "./store";

const KEYS = ["films", "people", "species", "starships", "vehicles", "planets"];

export const setTitle = (newTitle) => {
  return async (dispacth) => {
    dispacth({
      type: "SET_TITLE",
      payload: newTitle,
    });
    if (KEYS.includes(newTitle)) {
      const url = BASE_URL + newTitle;
      const newType = getType(newTitle);
      try {
        const response = await fetch(url);
        const { results } = await response.json();
        dispacth({
          type: newType,
          payload: results,
        });
      } catch (err) {
        console.log("LOG ::: ERROR >>> ", err);
      }
    }
  };
};

export const setObjectToDetails = (objet) => {
    return async (dispacth) => {
      dispacth({
        type: "SET_OBJECT",
        payload: objet,
      });
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
    case "vehicles":
      return "SET_VEHICLES";
    default:
      return "";
  }
};

