import {GET_DETAIL_RESTAURANT_SUCCESS} from "../actions/detailRestaurantActions";

const INITIAL_STATE = {
    detailRestaurant: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_DETAIL_RESTAURANT_SUCCESS:
            return {...state, detailRestaurant: action.payload};
        default:
            return state;
    }
};
