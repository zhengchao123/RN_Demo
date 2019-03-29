/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';


export default class detail extends Component {

    render() {
        return (<View style={styles.container}>
            <Text style={styles.text}>
                详情页面
            </Text>
        </View>);
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    }
});

