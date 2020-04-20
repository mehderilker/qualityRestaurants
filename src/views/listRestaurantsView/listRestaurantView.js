import React, {useState, useEffect} from 'react';
import {SafeAreaView, TouchableOpacity, StyleSheet, Image, View, FlatList, Text, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import {getBringRestaurantsByLocation} from '../../actions/listRestaurantsActions';
import {images} from '../../assets/imgPath';
import {RestaurantInfoCard} from '../../components';
import {RestaurantNavbar} from '../../components/navbar/restaurantNavbar';

const ListRestaurantView = (props) => {


    const renderItem = ({item}) =>{
      return(
          <RestaurantInfoCard
              restaurantNameText={item.restaurant.name}
              imageSource={{uri:item.restaurant.thumb !== "" ? item.restaurant.thumb : "https://i.pinimg.com/236x/b7/02/af/b702afc7b811840ebc49037cdc98bc45.jpg"}}
              averageCostForTwo={item.restaurant.average_cost_for_two}
              cuisinesText={item.restaurant.cuisines}
              locationText={item.restaurant.location.locality}
          />
    )
  };

  useEffect(() => {
    const loadRestaurants = async () => {
      await props.getBringRestaurantsByLocation(props.latitude,props.longitude)
    };
    loadRestaurants().then(r => console.log('r',r) )
  },[]);

  return (
    <RestaurantNavbar hideMenuIcon={true} hidePhoneIcon={true} >
      <FlatList data={props.listRestaurants}  renderItem={renderItem} contentContainerStyle = {{marginTop:10,paddingBottom:10}} keyExtractor={(item) => item.id}>
      </FlatList>
    </RestaurantNavbar>
  );
};

const mapStateToProps = state => {
  const {listRestaurants,latitude,longitude} = state.listRestaurant;
  return {listRestaurants,latitude,longitude};
};

export default connect(
  mapStateToProps,
  {getBringRestaurantsByLocation},
)(ListRestaurantView);
