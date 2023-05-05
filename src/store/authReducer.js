//setting the initial state to null as havent logged in yet so start the object
//with null
const initialState = {
    user: null,
    error: null,
  };
  
//taking in two params  state being initialized y intialstate and action has
//info which is dispatched
  const authReducer = (state = initialState, action) => {
    //using if else 
    if (action.type === 'LOGIN_SUCCESS')
     {console.log(user);
      return { ...state, user: action.payload, error: null };
    } else if 
    (action.type === 'LOGIN_FAILURE') {
      return { ...state, user: null, error: action.payload };
    } else 
    {
      //if the action is not recognized reducers should retunr
      return state;
    }
  };
  
  export default authReducer;
  