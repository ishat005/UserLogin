/* this initial state checks if a token is stored in local storage and sets 
the authenticated property accordingly. If a token is found, it's also stored 
in the token property.*/
const initialState = {
  authenticated: !!localStorage.getItem("token"),
  user: null,
  token: localStorage.getItem("token"),
  error: null,
};

/**
 * Reducer function to handle authentication-related actions.
 *
 * @param {Object} state - The current authentication state.
 * @param {Object} action - The action dispatched.
 * @param {string} action.type - The type of action.
 * @param {Object} [action.payload] - The payload containing data for the action.
 * @returns {Object} The new state after applying the action.
 *
 * Handles the following actions:
 * - LOGIN_SUCCESS: Sets authenticated to true, updates user and token, resets error.
 * - LOGIN_ERROR: Sets authenticated to false, updates error.
 * - REGISTER_SUCCESS: Updates user, resets error.
 * - REGISTER_ERROR: Updates error.
 * - TOKEN_VALID: Sets authenticated to true, updates user, resets error.
 * - LOGOUT_SUCCESS: Resets authenticated, user, token, and error.
 * - LOGOUT_ERROR: Updates error.
 * - Default: Returns the current state.
 */

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
      };
    case "LOGIN_ERROR":
      return { ...state, authenticated: false, error: action.payload };
    case "REGISTER_SUCCESS":
      return { ...state, user: action.payload, error: null };
    case "REGISTER_ERROR":
      return { ...state, error: action.payload };
    case "TOKEN_VALID":
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        error: null,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        authenticated: false,
        user: null,
        token: null,
        error: null,
      };
    case "LOGOUT_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
