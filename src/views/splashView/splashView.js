import React, {useState, useEffect} from 'react';
import {SafeAreaView,TouchableOpacity,StyleSheet, Image, FlatList, Text} from 'react-native';
import {connect} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import {updateLocation} from '../../actions/listRestaurantsActions';
import {colors, images} from '../../assets';

const SplashView = (props) => {

    useEffect(() => {
        setTimeout(() => {Geolocation.getCurrentPosition(info => props.updateLocation(info.coords.latitude,info.coords.longitude))
        },400)
    },[]);

    return (
        <SafeAreaView style={{flex:1,backgroundColor:colors.themeOrange,alignItems:'center',justifyContent:'center'}}>
            <Image style={{width:100,height:100}} source={images.logoIcon}/>
        </SafeAreaView>
    );
};

const mapStateToProps = state => {
    const {} = state.listRestaurant;
    return {};
};

export default connect(
    mapStateToProps,
    {updateLocation},
)(SplashView);
