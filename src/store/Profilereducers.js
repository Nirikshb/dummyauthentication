//initial state set to null taking 
const initialState = {
  profile: null,
  error: null,
};

//profile reducer is a functiin taking two params same as before
const profileReducer = (state = initialState, action) => {
  if (action.type === 'PROFILE_SUCCESS') {
    //using if else for success or failure on dispatch 
    return { ...state, profile: action.payload, error: null };
  } else if 
  (action.type === 'PROFILE_FAILURE') {
    return { ...state, profile: null, error: action.payload };
  } else 
  {
    return state;
  }
};

export default profileReducer;
//exporting