// import libs for components
import React from 'react';
import { Text, View } from 'react-native';


//make a component
// eslint-disable-next-line arrow-body-style
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 5,
        shadowColor: '#000', //ios
        shadowOffset: { width: 0, height: 2 }, //ios
        shadowOpacity: 0.2, //ios
        elevation: 2, 
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// make the component available to other parts of the app
export default Header;
