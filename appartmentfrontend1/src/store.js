import { AuthReducer } from "./pages/auth_redux/reducer";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  AuthReducer,
});

export const store = createStore(rootReducer);

console.log("initial state", store.getState());
