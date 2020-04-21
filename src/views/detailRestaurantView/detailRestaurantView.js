import React, {useState, useEffect} from 'react';
import {SafeAreaView, TouchableOpacity, StyleSheet, Image, View, FlatList, Text, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import {getBringRestaurantsByLocation} from '../../actions/listRestaurantsActions';
import {getDetailRestaurantAction} from '../../actions/detailRestaurantActions';
import {images} from '../../assets/imgPath';
import {RestaurantDetailCard} from '../../components';
import {RestaurantNavbar} from '../../components/navbar/restaurantNavbar';

const ListRestaurantView = (props) => {
    const restaurant = props.detailRestaurant;
    const phoneNumber = restaurant.phone_numbers !== "" ? restaurant.phone_numbers : "";

    return (
        <RestaurantNavbar hideMenuIcon={true} phoneNumberAdd={phoneNumber} >
           <RestaurantDetailCard imageSource={{uri:restaurant.thumb !== "" ? restaurant.thumb : "https://i.pinimg.com/236x/b7/02/af/b702afc7b811840ebc49037cdc98bc45.jpg"}}
           restaurantNameText={restaurant.name} averageCostForTwo={restaurant.average_cost_for_two} cuisinesText={restaurant.cuisines} locationText={restaurant.location.address}/>
        </RestaurantNavbar>
    );
};

const mapStateToProps = state => {
    const {detailRestaurant} = state.detailRestaurantReducer;
    return {detailRestaurant};
};

export default connect(
    mapStateToProps,
    {getBringRestaurantsByLocation,getDetailRestaurantAction},
)(ListRestaurantView);
