import api from '../api';

export const getDetailRestaurant = (restaurantID,callBack) => {
    api.get('/restaurant',{
        params:{
            res_id:restaurantID
        }
    }).then(function (response) {
        callBack(response.data,null)
    }).catch(function (error){
        callBack(null,error)
    })
};
