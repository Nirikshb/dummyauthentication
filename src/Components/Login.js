//importing neccessary
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/Loginaction';
import '../App.css';

//using useState to maintain setState and use dispatch for loginaction file
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const dispatch = useDispatch();

  //handle login with preventdefault 
  //dispatches login function with params username and passwrd
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(username, password))
    //   .then(() => window.location.href = "/Profile")
      .catch((error) => setLoginError(error.message));
  };
//to print data using form function with buttons and error displays

  return (
    <div className="login-form-container">
 <form className="login-form" onSubmit={handleLogin}>
      
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      {/* {loginError} */}
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <p>{loginError}</p>
      <button type="submit">Log in</button>
    </form>
    </div>
   
  );
};

export default Login;
