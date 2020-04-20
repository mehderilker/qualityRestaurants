import React from 'react';
import {View, StyleSheet, Text, Image, Button, TouchableOpacity} from 'react-native';

const RestaurantInfoCard = ({imageSource, onPress ,restaurantNameText,cuisinesText,locationText,averageCostForTwo}) => {
    return(
        <View style={styles.cardWrapper}>
            <TouchableOpacity onPress={onPress} style={styles.cardWrapperDetail}>
                <View>
                    <Image style={styles.imageThumb} source={imageSource}/>
                </View>
                <View style={styles.restaurantDetailView}>
                    <View>
                        <Text style={{fontWeight:'bold'}} numberOfLines={1} ellipsizeMode='tail'>{restaurantNameText}</Text>
                    </View>
                    <View style={styles.averageCostForTwoView}>
                        <Text numberOfLines={2} ellipsizeMode='tail'>2 Kişi Ortalama : {averageCostForTwo} ₺</Text>
                        <Text numberOfLines={2} ellipsizeMode='tail' style={{paddingTop:5}}>Mutfak: {cuisinesText} </Text>
                    </View>
                </View>
                <View style={styles.locationTextView}>
                    <Text numberOfLines={2} ellipsizeMode='tail' >{locationText}</Text>
                </View>
            </TouchableOpacity>

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
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 100,
        paddingLeft:5,
        borderRadius: 7.7,
        backgroundColor: '#ffffff',
        elevation:1,
        shadowColor:'#000000',
        shadowOffset:{width:0,height: 2},
        shadowOpacity:0.3,
    },
    imageThumb:{
        width: 100,
        height:'90%'
    },
    restaurantDetailView:{
        height:'100%',
        flex:2,
        paddingLeft:15,
        paddingTop:5,
        flexDirection:'column'
    },
    locationTextView:{
        flex:1,
        alignItems:'center',
        paddingLeft:15,
        paddingRight:15
    },
    averageCostForTwoView:{
        paddingTop:10
    }
});
export {RestaurantInfoCard}
