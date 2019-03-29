/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
    Dimensions,
    ListView,
    Alert,
    TouchableHighlight,
    Image,
    RefreshControl
}
    from
        'react-native';

import Detail from './detail'
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const circleSize = 8;
const circleMargin = 5;
export default class home extends Component {
    nextPage: number;

    constructor(props) {
        super(props)
        this.state = {
            isReFreshing: false,
            mCurrentPage: 0,
            mSearchText: '',
            dataSource: ds.cloneWithRows([{
                image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4196694177,288739235&fm=26&gp=0.jpg',
                title: '商品1',
                subTitle: '商品描述1'
            },
                {
                    image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4196694177,288739235&fm=26&gp=0.jpg',
                    title: '商品1',
                    subTitle: '商品描述1'
                },
                {
                    image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4196694177,288739235&fm=26&gp=0.jpg',
                    title: '商品3',
                    subTitle: '商品描述3'
                },
                {
                    image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2786915463,2587402109&fm=26&gp=0.jpg',
                    title: '商品4',
                    subTitle: '商品描述4'
                },
                {
                    image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2648242255,4262411042&fm=26&gp=0.jpg',
                    title: '商品5',
                    subTitle: '商品描述5'
                },
                {
                    image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2786915463,2587402109&fm=26&gp=0.jpg',
                    title: '商品6',
                    subTitle: '商品描述6'
                },
                {
                    image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4196694177,288739235&fm=26&gp=0.jpg',
                    title: '商品7',
                    subTitle: '商品描述7'
                },
                {
                    image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1855235008,3120119819&fm=26&gp=0.jpg',
                    title: '商品8',
                    subTitle: '商品描述8'
                },
                {
                    image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2786915463,2587402109&fm=26&gp=0.jpg',
                    title: '商品9',
                    subTitle: '商品描述9'
                },
                {
                    image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2648242255,4262411042&fm=26&gp=0.jpg',
                    title: '商品10',
                    subTitle: '商品描述10'
                },

            ]),
            advertisements: [
                {
                    title: '广告first',
                    backgroundColor: 'orange',
                    url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4196694177,288739235&fm=26&gp=0.jpg'
                },
                {
                    title: '广告second',
                    backgroundColor: 'green',
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2648242255,4262411042&fm=26&gp=0.jpg'
                }, {
                    title: '广告third',
                    backgroundColor: 'blue',
                    url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2786915463,2587402109&fm=26&gp=0.jpg'
                }, {
                    title: '广告fourth',
                    backgroundColor: 'red',
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1855235008,3120119819&fm=26&gp=0.jpg'
                }]
        }
    }

    render() {

        const advertisementCount = this.state.advertisements.length;
        const indicatorWidth = circleSize * advertisementCount + circleMargin * circleSize * 2;
        const leftPosition = (Dimensions.get('window').width - indicatorWidth) / 2
        return (
            <View style={styles.container}>
                <View style={styles.searchbar}>
                    <TextInput style={styles.input} placeholder='搜索商品' onChangeText={(text) => {
                        this.setState({mSearchText: text});
                        console.log('input text =' + this.state.mSearchText)
                    }}/>
                    <Button style={styles.button1} title='搜索'
                            onPress={() => Alert.alert('click search text ' + this.state.mSearchText, null, null)}/>
                </View>
                <View style={styles.advertisement}>
                    <ScrollView style={styles.scrollview}
                                ref="scrollView"
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                pagingEnabled={true}>

                        {
                            this.state.advertisements.map((value, index) => {
                                return (<TouchableHighlight key={index}
                                                            onPress={() => Alert.alert('click scroll text index=' + {index}, null, null)}>
                                    <Image style={[styles.advertisedementContent, {
                                        backgroundColor: value.backgroundColor
                                    }]} source={{uri: value.url}}>

                                    </Image>
                                </TouchableHighlight>);
                            })
                        }
                    </ScrollView>
                    <View style={[styles.indicator, {left: leftPosition}]}>
                        {
                            this.state.advertisements.map((value, index) => {
                                return (<View key={index}
                                              style={(index === this.state.mCurrentPage) ? styles.circleSelected : styles.circle}/>)
                            })
                        }
                    </View>
                </View>
                <View style={styles.products}>

                    <ListView style={{flex: 1}}
                              dataSource={this.state.dataSource}
                              renderRow={this._renderRow}
                              renderSeparator={this._renderSeparator}
                        // refreshControl
                              refreshControl={this._renderRefresh()}
                    />
                </View>
            </View>

        );
    }

    //下拉刷新视图
    _renderRefresh() {
        return (
            <RefreshControl refreshing={this.state.isReFreshing}
                            onRefresh={this._onRefresh}
                            titleColor={'#0000FF'}
                            title={'refresing ...,please waiting'}
                            tintColor={'#FF0000'}/>
        );
    }

    //刷新回调
    _onRefresh = () => {
        this.setState({isReFreshing: true});
        setTimeout(() => {

            const newProducts = Array.from(new Array(10)).map((value, index) => ({
                image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2786915463,2587402109&fm=26&gp=0.jpg',
                title: 'new商品 ' + index,
                subTitle: 'new 商品描述 ' + index
            }))
            this.setState({isReFreshing: false, dataSource: ds.cloneWithRows(newProducts)})
        }, 2000);
    }
    //分割线
    _renderSeparator = (sectionId, rowId, adjacentRowHighlighted) => {
        return (
            <View style={styles.diliver} key={'${sectionId}-${rowId}'}/>
        )
    }

//listview的row视图
    _renderRow = (rowData, sectionId, rowId) => {
        return (
            <TouchableHighlight onPress={() => {
                const {navigator}=this.props;
                if(navigator){
                    navigator.push({
                        name:'detail',
                        component:Detail,
                        params:{
                            productTitle:rowData.title
                        }
                    });
                }
            }

            }>
                <View style={styles.row}>
                    <Image source={{uri: rowData.image}} style={styles.productImage}/>
                    <View style={styles.productText}>
                        <Text style={styles.productTitle}>{rowData.title}</Text>
                        <Text style={styles.productSubTitle}>{rowData.subTitle}</Text>
                    </View>

                </View>
            </TouchableHighlight>
        )
    }

    componentDidMount(): void {
        this.startTimer()
    }

    componentWillUnmount(): void {
        clearInterval(this.interval)
    }

    startTimer() {
        this.interval = setInterval(() => {
            this.nextPage = this.state.mCurrentPage + 1;
            if (this.nextPage >= 4) {
                this.nextPage = 0;
            }
            this.setState({mCurrentPage: this.nextPage});
            const offSetX = this.nextPage * Dimensions.get('window').width;
            this.refs.scrollView.scrollTo({x: offSetX, y: 0, animated: true});
        }, 2000)
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

    input: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10
    },
    searchbar: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        height: 40,
        flexDirection: 'row',
        paddingLeft: 2,
        paddingRight: 2
    },
    button1: {
        flex: 1,
        backgroundColor: '#aac4e8',
        color: 'green',
        textAlign: 'center'
    },
    advertisement: {
        height: 180,
        alignItems: 'center',
        justifyContent: 'center'
    },
    products: {
        flex: 1,
    },
    scrollview: {
        height: 180,
        backgroundColor: 'red'
    },
    row: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    advertisedementContent: {
        width: Dimensions.get('window').width,
        height: 180
    },
    indicator: {
        position: 'absolute',
        top: 160,
        flexDirection: 'row'
    },
    circle: {
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
        backgroundColor: 'gray',
        marginHorizontal: circleMargin
    },
    circleSelected: {
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
        backgroundColor: 'white',
        marginHorizontal: circleMargin
    },
    listItemRow: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    productImage: {
        width: 40,
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        alignSelf: 'center'
    },
    productText: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10
    },
    productTitle: {
        flex: 3,
        fontSize: 16
    },
    productSubTitle: {
        flex: 2,
        fontSize: 14,
        color: 'red'
    },
    diliver: {
        width: Dimensions.get('window').width,
        height: 1,
        marginLeft: 5,
        backgroundColor: 'lightgray'
    }
});

