/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Navigator, StyleSheet, View, ActivityIndicator, Picker
} from
        'react-native';


export default class more extends Component {

    constructor(props) {
        super(props)
        {
            this.state = {

                pickers: [
                    {
                        lable: 'java',
                        content: 'java',
                    },
                    {
                        lable: 'javaScript',
                        content: 'javaScript',
                    }, {
                        lable: 'android',
                        content: 'android',
                    }, {
                        lable: 'RN',
                        content: 'RN',
                    }],
                pickValue:'java',
            }
        }
    }

    render() {
        return (<View style={styles.container}>
            {/*<ActivityIndicator color="purple" size="large">*/}

            {/*</ActivityIndicator>*/}
            <Picker style={styles.picker}
                    selectedValue={this.state.pickValue}
                    onValueChange={this._onPickValueChange}>
                {
                    this.state.pickers.map(((value, index) => {
                        return (<Picker.PickerItem key={index} label={value.lable} value={value.content}/>);
                    }))
                }

            </Picker>
        </View>);
    }

    _onPickValueChange = (value) => {
        this.setState({pickValue: value})
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    picker: {
        width: 200,
        height: 200
    }
})
