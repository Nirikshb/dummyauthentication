// import { createStore, applyMiddleware } from 'redux';

// const initialState = {};

//   }
// };

// const store = createStore(reducer, initialState);

// export default store;
//created a redux store using redux
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
//created a store applying thunk with middlewear
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

