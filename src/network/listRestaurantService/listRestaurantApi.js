import api from '../api';

export const getRestaurants = (latitude,longitude,callBack) => {
    console.log(latitude,longitude);
    api.get('/search',{
        params:{
            count:10,
            lang:'tr',
            lat:latitude,
            lon:longitude,
            sort:'real_distance',
        }
    }).then(function (response) {
        console.log(response.data.restaurants);
        callBack(response.data.restaurants,null)
    }).catch(function (error){
        console.log(error)
        callBack(null,error)
    })
};



