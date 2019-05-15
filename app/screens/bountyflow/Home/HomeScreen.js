import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    Modal,
    FlatList,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';



const { width, height } = Dimensions.get('screen');

export default class HomeScreen extends Component {
    state = {
     
        notificationVisible: false,
        numOfNotification: 99,
        notifications: [
            {
                id: '1',
                detail: 'Mathewe2 has rejected your bounty claim'
            },
            {
                id: '2',
                detail: 'Mathewe2 has rejected your bounty claim'
            },
            {
                id: '3',
                detail: 'Mathewe2 has rejected your bounty claim'
            }
        ]
    }

    _renderIconNotification() {
        if (this.state.numOfNotification !== 0 && !this.state.notificationVisible) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../../../assets/ic_bounty_flow/ic_notifications.png')} />
                    <View style={{ zIndex: 1000, position: 'absolute', bottom: 0, left: 20, width: 20, height: 20, borderRadius: 10, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
                        <Text
                            numberOfLines={1}
                            style={{ color: 'white' }}
                        >
                            {this.state.numOfNotification}
                        </Text>
                    </View>
                </View>
            )
        } else if (this.state.numOfNotification === 0 && !this.state.notificationVisible) {
            return (
                <Image source={require('../../../assets/ic_bounty_flow/ic_notifications.png')} />
            )
        } else if (this.state.notificationVisible) {
            return (
                <Image source={require('../../../assets/ic_bounty_flow/ic_notifications_active.png')} />
            )
        }
    }

    _changeNotificationIcon = (change) => {
        this.setState({
            notificationVisible: change
        })
    }

    _clickNotification = () => {
        if (!this.state.notificationVisible)
            this.setState({
                numOfNotification: 0,
                notificationVisible: !this.state.notificationVisible
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
                    <TouchableOpacity onPress={() => this.setState({ notificationVisible: false })}>
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
    _renderItemNotification = ({ item }) => (
        <TouchableOpacity style={styles.itemNotification}>
            <Image style={styles.avatarItemNotification} />
            <Text>{item.detail}</Text>
        </TouchableOpacity>
    )


    _renderNotificationModal() {
        if (this.state.notificationVisible)
            return (
                <View style={styles.notificationContainer}>
                    <FlatList
                        style={{ flex: 1 }}
                        data={this.state.notifications}
                        keyExtractor={(item) => item.id}
                        renderItem={this._renderItemNotification}
                    />
                </View>

            )
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
                {this._renderNotificationModal()}
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
    },
    notificationContainer: {
        flex: 1,
        marginTop: 56,
        marginBottom: 56,
        backgroundColor: '#F5F5F5',
        position: 'absolute'
    },
    itemNotification: {
        width: width,
        height: 60,
        //justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingLeft: 20,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: '#F5F5F5',
        flexDirection: 'row',

    },
    avatarItemNotification: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
        marginRight: 20
    }
})