/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Navigator
} from
        'react-native-deprecated-custom-components';
import Home from './js/home';


export default class app extends Component {

    render() {
        return (<Navigator
            //加载的第一个页面
            initialRoute={{
                name: 'home',
                component: Home
            }}
            //页面进场动画
            configureScene={(route) => {
                return Navigator.SceneConfigs.FloatFromRight;
            }}

            renderScene={(route, navigator) => {
                const Component = route.component;
                return <Component {...route.params} navigator={navigator}/>
            }}
        >

        </Navigator>);
    }
};

