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
import Main from './js/main';


/**
 * 必须要在主页面 注册了Navigator才能够在以后的页面中拿到navigator以便控制页面跳转
 */
export default class app extends Component {

    render() {
        return (<Navigator
            //加载的第一个页面
            initialRoute={{
                name: 'main',
                component: Main
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

