import { combineReducers } from 'redux';
import destinations from './destinationReducers';
export default combineReducers({
  destinations: destinations,
  // More reducers if there are
  // can go here
});