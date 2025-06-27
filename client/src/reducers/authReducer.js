const initialState = {
  authenticated: !!localStorage.getItem('token'),
  user: null,
  token: localStorage.getItem('token'),
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { 
        ...state, 
        authenticated: true, 
        user: action.payload.user, 
        token: action.payload.token,
        error: null 
      };
    case "LOGIN_ERROR":
      return { ...state, authenticated: false, error: action.payload };
    case "REGISTER_SUCCESS":
      return { ...state, user: action.payload, error: null };
    case "REGISTER_ERROR":
      return { ...state, error: action.payload };
    case "TOKEN_VALID":
      return { ...state, authenticated: true, user: action.payload, error: null };
    case "LOGOUT_SUCCESS":
      return { ...state, authenticated: false, user: null, token: null, error: null };
    case "LOGOUT_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
