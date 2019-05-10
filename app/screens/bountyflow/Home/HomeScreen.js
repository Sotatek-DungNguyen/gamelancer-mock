import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('screen');
import PaymentModal from '../components/PaymentModal';

export default class HomeScreen extends Component {
    state = {
        isInNotification: false,
        numOfNotification: 1,
    }

    _renderIconNotification() {
        // const img = this.state.isInNotification ?
        //     require('../../../assets/ic_bounty_flow/ic_notifications_active.png') :
        //     require('../../../assets/ic_bounty_flow/ic_notifications.png')

        if (this.state.numOfNotification !== 0 && !this.state.isInNotification) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../../../assets/ic_bounty_flow/ic_notifications.png')} />
                    <View style={{ zIndex: 1000, position: 'absolute', bottom: 0, left: 20, width: 20, height: 20, borderRadius: 10, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white' }}>{this.state.numOfNotification}</Text>
                    </View>
                </View>
            )
        } else if (this.state.numOfNotification === 0 && !this.state.isInNotification) {
            return (
                <Image source={require('../../../assets/ic_bounty_flow/ic_notifications.png')} />
            )
        } else if (this.state.isInNotification) {
            return (
                <Image source={require('../../../assets/ic_bounty_flow/ic_notifications_active.png')} />
            )
        }
    }

    _changeNotificationIcon = (change) => {
        this.setState({
            isInNotification: change,
        })
    }

    _clickNotification = () => {
        if (!this.state.isInNotification)
            this.setState({
                isInNotification: !this.state.isInNotification,
                numOfNotification: 0
            })
    }


    _clickAdd = () => {
        this._changeNotificationIcon(false)
        this.props.navigation.navigate('Post')
    }

    _clickSearch = () => {
        this._changeNotificationIcon(false)
        this.props.navigation.navigate('Search')
    }
    _renderHeader() {
        return (
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity>
                        <Text style={{ color: 'green', fontSize: 30, fontWeight: 'bold' }}>G</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.headerRight}>
                    <TouchableOpacity
                        onPress={() => this._clickSearch()}
                        style={styles.headerRightButton}
                    >
                        <Image source={require('../../../assets/ic_bounty_flow/search.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._clickNotification()}
                        style={styles.headerRightButton}
                    >
                        {this._renderIconNotification()}
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._clickAdd()}
                        style={styles.headerRightButton}
                    >
                        <Image source={require('../../../assets/ic_bounty_flow/add.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    _showPaymentModal() {
        this.props.navigation.navigate('Pay')
    }
    render() {
        return (
            <View style={styles.container}>
                {this._renderHeader()}
                <View style={styles.body}>
                    <TouchableOpacity
                        onPress={() => this._showPaymentModal()}
                    >
                        <Text>Payment Modal</Text>
                    </TouchableOpacity>
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
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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