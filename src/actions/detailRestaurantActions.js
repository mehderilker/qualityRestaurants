import {getDetailRestaurant} from "../network";
import store from "../store/store";
import{Actions} from "react-native-router-flux"

export const GET_DETAIL_RESTAURANT_SUCCESS = "get_detail_restaurant_success";
export const GET_DETAIL_RESTAURANT_FAILED = "get_detail_restaurant_failed";

export const getDetailRestaurantAction = (restaurantID) => {
    getDetailRestaurant(restaurantID,callbackGetDetailRestaurant)
};

const getDetailRestaurantSuccess = (response,dispatch) => {
    dispatch({
        type:GET_DETAIL_RESTAURANT_SUCCESS,
        payload:response
    });

    Actions.detailRestaurant()
};

const getDetailRestaurantFailed = (error,dispatch) => {
    dispatch({
        type:GET_DETAIL_RESTAURANT_FAILED,
        payload:error
    });
};

const callbackGetDetailRestaurant = (response,error) => {
    if(error != null) {
        getDetailRestaurantFailed(error,store.dispatch)
    }else {
        getDetailRestaurantSuccess(response,store.dispatch)
    }
};
