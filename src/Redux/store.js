import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import navbarReducer from './Reducers/navbarReducer';
import videosReducer from './Reducers/videosReducer';

const rootReducer = combineReducers({
  navbarReducer,
  videosReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
