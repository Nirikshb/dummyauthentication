import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import store from './store/store';
import Login from './Components/Login';
// import { Profile } from './Components/Profile';
import Profile from './Components/Profile';
import './App.css';

const App = () => {
  const user = useSelector((state) => state.user);
//wrapping it in provider to make redux store avaiabele to
//everychild
  return (
    <Provider store={store}>
      {user ? (
        <Profile />
      ) : (
        <Login />
      )}
    </Provider>
  );
};

export default App;
