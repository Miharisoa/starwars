import { combineReducers } from "redux";
import { appReducer } from "./reducers";

const reducers = combineReducers({
  reducer: appReducer,
});

export default reducers;
