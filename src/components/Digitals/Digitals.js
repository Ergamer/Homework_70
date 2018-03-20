import React from 'react';
import {Button, View, StyleSheet} from "react-native";


const Digitals = props => {

    let butt = [];
    for (let i = 0; i < 10; i++) {
        butt.push(<Button onPress={() => props.showSomeDigit(i)} title={String(i)}/>)
    }
    return (
        <View style={styles.digitalsContainer}>
            <View style={styles.buttons}>{butt}</View>
            <View style={styles.buttons}>
                <Button style={styles.button} onPress={() => props.showSomeDigit("+")} title="+"/>
                <Button style={styles.button} onPress={() => props.showSomeDigit("-")} title="-"/>
                <Button style={styles.button} onPress={() => props.showSomeDigit("*")} title="*"/>
                <Button style={styles.button} onPress={() => props.showSomeDigit("/")} title="/"/>
                <Button style={styles.button} onPress={props.showSomeResult} title="="/>
                <Button style={styles.button} onPress={props.removeSomeDigit} title="C"/>
                <Button style={styles.button} onPress={props.removeSomeResult} title="CE"/>
            </View>
        </View>

    )
};

const styles = StyleSheet.create({
    digitalsContainer: {
        width: '100%',
        flexDirection: 'row'
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        flex: 1
    },
    button: {
        flex: 1,
        marginRight: 5
    }

});


export default Digitals;