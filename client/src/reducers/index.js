import { combineReducers } from 'redux';

import storeReducer from './storeReducer';
import statsReducer from './statsReducer';
import matchesReducer from './matchesReducer';

export default combineReducers({
  store: storeReducer,
  stats: statsReducer,
  matches: matchesReducer
});
