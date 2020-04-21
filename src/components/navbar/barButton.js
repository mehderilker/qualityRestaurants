import React from 'react'
import {Image, View} from 'react-native'
import ImageButton from './imageButton'

const BarButton = (props) => {

        if (props.hideIcon ?? false) {
            return (<View style = {props.style}/>);
        }

        if (props.onClick ?? false) {

            return  (<ImageButton
                source = {props.source}
                onPressButton = {props.onClick}
                style = {{marginLeft: props.style.marginLeft, marginRight:props.style.marginRight}}
                imageStyle = {{width:props.style.width, height:props.style.height}}/>);
        }

        return (<Image source = {props.source} style = {props.style}/>);

};

export default BarButton
