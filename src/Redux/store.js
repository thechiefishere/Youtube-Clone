import { createStore, combineReducers } from 'redux';

import navbarReducer from './Reducers/navbarReducer';

const rootReducer = combineReducers({
  navbarReducer,
});
export const store = createStore(rootReducer);
