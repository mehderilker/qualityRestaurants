import {getRestaurants} from '../network';
import {Actions} from "react-native-router-flux";
import store from "../store/store";
export const GET_RESTAURANTS_SUCCESS = 'get_restaurants_success';
export const GET_RESTAURANTS_FAILED = 'get_restaurants_failed';
export const UPDATE_LOCATION = 'update_location';

export const getBringRestaurantsByLocation = (latitude,longitude) => {
        getRestaurants(latitude,longitude,callbackGetRestaurants)
};

export const updateLocation = (latitude,longitude) => {
    return(dispatch) => {
        dispatch({
            type:UPDATE_LOCATION,
            payload: {
                latitude,
                longitude
            }
        });
        Actions.main()
    };
};

const getRestaurantsSuccess = (response,dispatch) => {
    dispatch({
        type:GET_RESTAURANTS_SUCCESS,
        payload:response
    });
};

const getRestaurantsFailed = (error,dispatch) => {
    dispatch({
        type:GET_RESTAURANTS_FAILED,
        payload:error
    });
};

const callbackGetRestaurants = (response,error) => {
    if(error != null) {
        getRestaurantsFailed(error,store.dispatch)
    }else {
        getRestaurantsSuccess(response,store.dispatch)
    }
};
