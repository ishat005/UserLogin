/* sets up a Redux store for state management in a JavaScript application.*/
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // Middleware: enables async actions
import authReducer from "./reducers/authReducer"; //redux-thunk middleware for handling async actions (API calls)

// Imports authentication reducer that manages login/logout state
const store = createStore(authReducer, applyMiddleware(thunk));

export default store;
