import React, {Component} from 'react';
import {AppLoading, Constants} from 'expo';
import {View, StyleSheet} from 'react-native';

import Application from './src'

export default class App extends Component {
    state = {};

    async componentDidMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });

        this.setState({isReady: true});
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.isReady ? <Application/> : <AppLoading/>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    }
});
