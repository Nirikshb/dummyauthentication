// Profile.js
//importing 
import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile } from '../actions/Profileaction';
import '../App.css';


//
const Profile = () => {
  //using useSelector from redux store 
  //to access data from redux store 
    const user = useSelector((state) => state.user);
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();
//getprofile is dispatched due to useEffect
//its dispatched with the payload from profileaction
  useEffect(() => {
    if (user) {
      dispatch(getProfile(user.id));
    }
  }, [user, dispatch]);

  return (
    <div className="profile-container">
      
      {profile ? (
          <div className="profile-box">
          <p>ID : {profile.id}</p>
          <p>Name: {profile.firstName}</p>
          <p>Age: {profile.age}</p>
          <p>Birthdate: {profile.birthDate}</p>
          <p>Gender: {profile.gender}</p>
          <p>Email: {profile.email}</p>
          <p>Height: {profile.height}</p>
          <p>Phone: {profile.phone}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    
    </div>
    
  );
};

export default Profile;