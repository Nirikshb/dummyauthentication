//setting it to three properties to null 
const initialState = {
  user: null,
  profile: null,
  error: null,
};
//is a function that takes two args
const rootReducer = (state = initialState, action) => {
  if (action.type === 'LOGIN_SUCCESS') {
    //if login happens after dispatched checkes with action.type determines 
    //what to execture
    return { ...state, user: action.payload, error: null };
  } 

  else if (action.type === 'LOGIN_FAILURE') {
    return { ...state, user: null, error: action.payload };
  } 
  else if (action.type === 'PROFILE_SUCCESS') {
    return { ...state, profile: action.payload, error: null };
  
  } 
  else if (action.type === 'PROFILE_FAILURE') {
    return { ...state, profile: null, error: action.payload };
  } 
  
  else {
    return state;
  }
};

export default rootReducer;
