import {GET_RESTAURANTS_SUCCESS, UPDATE_LOCATION} from '../actions/listRestaurantsActions';

const INITIAL_STATE = {
  listRestaurants: [],
  latitude:0.0,
  longitude: 0.0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_RESTAURANTS_SUCCESS:
      return {...state, listRestaurants: action.payload};
    case UPDATE_LOCATION:
      const {latitude,longitude} = action.payload;
      return {...state,latitude: latitude,longitude: longitude};
    default:
      return state;
  }
};
