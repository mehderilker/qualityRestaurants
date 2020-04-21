import React, {Component} from 'react';
import {Image ,TouchableOpacity, Alert} from 'react-native'

const ImageButton = (props) => {
        return(
            <TouchableOpacity onPress={props.onPressButton} style={props.style}>
                <Image source = {props.source} style = {props.imageStyle}/>
            </TouchableOpacity>
        )
};

export default ImageButton
