import React from 'react';
import {View, StyleSheet, Text, Dimensions,Image, Button, TouchableOpacity} from 'react-native';
const width_proportion = Dimensions.get('window').width/1.2;

const RestaurantDetailCard = ({imageSource ,restaurantNameText,cuisinesText,locationText,averageCostForTwo}) => {
    return(
        <View style={styles.cardWrapper}>
            <View style={styles.cardWrapperDetail}>
                <View style={styles.imageView}>
                    <Image style={styles.imageThumb} source={imageSource}/>
                </View>
                <View style={styles.restaurantDetailView}>
                    <View>
                        <Text style={{fontWeight:'bold'}} numberOfLines={1} ellipsizeMode='tail'>{restaurantNameText}</Text>
                    </View>
                    <View style={styles.averageCostForTwoView}>
                        <Text numberOfLines={1} ellipsizeMode='tail'>2 Kişi Ortalama : {averageCostForTwo} ₺</Text>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={{paddingTop:5}}>Mutfak: {cuisinesText} </Text>
                    </View>
                    <View style={styles.locationTextView}>
                        <Text style={{fontWeight:'100'}}  numberOfLines={2} ellipsizeMode='tail' >{locationText}</Text>
                    </View>
                </View>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    cardWrapper:{
        alignItems:'flex-start',
        flex:1,
        paddingVertical:5,
        paddingLeft:15,
        paddingRight:15
    },
    cardWrapperDetail:{
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: 400,
        paddingLeft:5,
        borderRadius: 7.7,
        backgroundColor: '#ffffff',
        elevation:1,
        shadowColor:'#000000',
        shadowOffset:{width:0,height: 2},
        shadowOpacity:0.3,
    },
    imageView:{
        padding:15,
        elevation:1,
        shadowColor:'#000000',
        shadowOffset:{width:0,height: 2},
        shadowOpacity:0.3,
    },
    imageThumb:{
        borderRadius: 10,
        width: width_proportion,
        height:100
    },
    restaurantDetailView:{
        flex:1,
        width:'100%',
        paddingLeft:10,
        paddingTop:5,
        flexDirection:'column'
    },
    locationTextView:{
        paddingTop:10,
    },
    averageCostForTwoView:{
        paddingTop:10
    }
});
export {RestaurantDetailCard}
