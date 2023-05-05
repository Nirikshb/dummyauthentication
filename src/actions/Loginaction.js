//ecxporting login function taking username and password as args
export const login = (username, password) => async (dispatch) => {
  try {
    //makes a POST request
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    // with username and password to be returned in json object using stringy
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      // using dispatch to update redux store
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      //using localstorage to set user key and converting using stringify
      localStorage.setItem('user', JSON.stringify(data));
      //also saving the data in LocalStorage
    } else {
      //throwing error incase its wrong 
      throw new Error('Invalid username or password');
    }
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    throw error;
  }
};
