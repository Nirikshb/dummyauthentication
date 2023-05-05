//same export as login. exporting getprofile id as parameter in redux thunk
export const getProfile = (id) => (dispatch) => {
  //fetching to retrive user profile as asked
  fetch(`https://dummyjson.com/users/${id}`)
  //using .then and method to handle reponse
    .then((res) => {
      if (res.ok) {
        console.log(res);
        return res.json();
      } else {
        throw new Error('Unable to fetch profile');
      }
    })
    .then((data) => {
      console.log(data);
      // using dispatch with type, payload so other parts can access 
      dispatch({ type: 'PROFILE_SUCCESS', payload: data });
    })
    .catch((error) => {
      dispatch({ type: 'PROFILE_FAILURE', payload: error.message });
    });
};