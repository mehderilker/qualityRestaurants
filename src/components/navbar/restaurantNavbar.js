/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {Platform, StyleSheet, View, Image, Dimensions, StatusBar, Alert} from 'react-native';
import {images, colors} from '../../assets/index';
import BarButton from './barButton';
import ImageButton from './imageButton';
import {isIphoneX} from '../../tools/device';
import call from '../../tools/call';
import {useSelector} from 'react-redux';


const RestaurantNavbar = (props) => {

    const [bgHeight, setBgHeight] = useState(0);

    const _onPressButton = () => {
        // Alert.alert('You tapped the button!')
    };

    const _onPressPhoneButton = (phoneNumber) => {
        if (phoneNumber != null) {
            const args = {
                number: phoneNumber,
                prompt: false,
            };
            call(args).catch(console.error);
        } else {
            return null;
        }
    };

    const getBgStyle = () => {
        if (bgHeight > 0) {
            return {
                width: Dimensions.get('window').width,
                height: bgHeight,
                marginTop: 120,
                position: 'absolute',
            };
        }
        return {position: 'absolute'};
    };

    const BarIcon = (props) => {
        if (props.hideIcon ?? false) {
            return (<View style={props.style}/>);
        }

        if (props.onClick ?? false) {

            return (<ImageButton source={props.source} onPressButton={props.onClick}
                                 style={{marginLeft: props.style.marginLeft, marginRight: props.style.marginRight}}
                                 imageStyle={{width: props.style.width, height: props.style.height}}/>);
        }

        return (<Image source={props.source} style={props.style}/>);
    };

    return (
        <View>
            <StatusBar backgroundColor={colors.themeOrange} barStyle="light-content"/>
            <View style={{width: '100%', height: '100%', backgroundColor: '#ffffff'}}>
                <View style={{
                    backgroundColor: colors.themeOrange,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    height: (STATUSBAR_HEIGHT + STATUSBAR_PADDING),
                    paddingTop: STATUSBAR_PADDING,
                }}>
                    <BarButton source={images.menuButton} hideIcon={props.hideMenuIcon}
                               style={{marginLeft: 20, width: 20, height: 14}} onClick={_onPressButton}/>
                    <View style={{flexGrow: 1, alignItems: 'center'}}>
                        <BarButton source={images.logoIcon} hideIcon={props.hideHomeIcon}
                                   style={{width: 40, height: 40}} onClick={_onPressButton}/>
                    </View>
                    <BarButton source={images.phoneIcon} hideIcon={props.hidePhoneIcon}
                               style={{marginRight: 10, width: 40, height: 40}}
                               onClick={() => _onPressPhoneButton(props.phoneNumberAdd)}/>
                </View>

                <Image
                    onLayout={(event) => {
                        if (bgHeight > 0) {
                            return;
                        }
                        let {x, y, width, height} = event.nativeEvent.layout;
                        setBgHeight(height * (Dimensions.get('window').width / width));

                    }}

                    resizeMode='contain'
                    source={images.bgPattern}
                    style={getBgStyle()}
                />
                {props.children}
                {console.log("selam")}


            </View>
        </View>
    );
};

const STATUSBAR_HEIGHT = 56;

const STATUSBAR_PADDING = Platform.OS === 'ios' ? (isIphoneX() ? 44 : 20) : 0;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
    },
});

export {RestaurantNavbar};
