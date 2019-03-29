/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    ViewPagerAndroid, View
} from 'react-native';
import Home from './home';
import More from './more';


export default class app extends Component {

    render() {
        // return (<Navigator
        //     //加载的第一个页面
        //     initialRoute={{
        //         name: 'home',
        //         component: Home
        //     }}
        //     //页面进场动画
        //     configureScene={(route) => {
        //         return Navigator.SceneConfigs.FloatFromRight;
        //     }}
        //
        //     renderScene={(route, navigator) => {
        //         const Component = route.component;
        //         return <Component {...route.params} navigator={navigator}/>
        //     }}
        // >
        //
        // </Navigator>);


        return <ViewPagerAndroid style={styles.container} initialPage={0}>
            <View style={styles.pageStyle}>
                <Home navigator={this.props.navigator}/>
            </View>
            <View style={styles.pageStyle}>
                <More navigator={this.props.navigator}/>
            </View>
        </ViewPagerAndroid>
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    pageStyle: {
        flex: 1
    }
})

