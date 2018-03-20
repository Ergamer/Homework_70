import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Digitals from "./src/components/Digitals/Digitals";
import ShowDigitals from "./src/components/ShowDigitals/ShowDigitals";

export default class App extends React.Component {

    state = {
      digits: ''
    };


    showSomeDigit = (value) => {
      this.setState({digits: this.state.digits + value});
    };

    showSomeResult = () => {
        this.setState({digits: eval(this.state.digits)});
    };

    removeSomeDigit = () => {
      this.setState({digits: this.state.digits.slice(0, -1)});
    };

    removeSomeResult = () => {
        this.setState({digits: ''});
    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <ShowDigitals digits={this.state.digits} />
                </View>
                <View>
                    <Digitals removeSomeDigit={this.removeSomeDigit}
                              showSomeDigit={this.showSomeDigit}
                              showSomeResult={this.showSomeResult}
                              removeSomeResult={this.removeSomeResult}
                    />
                </View>

            </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
