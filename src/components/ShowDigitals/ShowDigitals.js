import React from 'react';
import {Text, View, StyleSheet} from "react-native";


const ShowDigitals = props => {


    return (
        <View style={styles.showDigitals}>
            <Text>
                {props.digits}
            </Text>
        </View>
    )
};


const styles = StyleSheet.create({
    showDigitals: {
        width: '100%',
        marginBottom: 20,
        height: 300
    }
});



export default ShowDigitals;