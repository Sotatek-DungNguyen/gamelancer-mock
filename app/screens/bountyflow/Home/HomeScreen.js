import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('screen');


export default class HomeScreen extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Text style={{ color: 'green', fontSize: 20 }}>G</Text>
                    </View>
                    <View style={styles.headerRight}>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('Search') }}
                            style={styles.headerRightButton}
                        >
                            <Image source={require('../../../assets/ic_bounty_flow/search.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            // onPress={() => { this.props.navigation.navigate('Search') }}
                            style={styles.headerRightButton}
                        >
                            <Image source={require('../../../assets/ic_bounty_flow/ic_notifications.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('Post') }}
                            style={styles.headerRightButton}
                        >
                            <Image source={require('../../../assets/ic_bounty_flow/add.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: width,
        height: 56,
        borderWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    headerLeft: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingLeft: 20
    },
    headerRight: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingRight: 20
    },
    headerRightButton: {
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    }
})