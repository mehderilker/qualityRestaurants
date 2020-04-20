import {combineReducers} from 'redux';
import ListRestaurantReducer from './listRestaurantReducer';

export default combineReducers({
  listRestaurant: ListRestaurantReducer,
});
