import {combineReducers} from 'redux';
import ListRestaurantReducer from './listRestaurantReducer';
import DetailRestaurantReducer from './detailRestaurantReducer';

export default combineReducers({
  listRestaurant: ListRestaurantReducer,
  detailRestaurantReducer: DetailRestaurantReducer
});
