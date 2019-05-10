import React, { Component } from 'react';
import { View, Modal, TouchableOpacity, TouchableWithoutFeedback, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default class PaymentModal extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        popupVisible: false
    }

    _renderItemPay(title, isSelect) {
        //  const backgroundColor:
        return (
            <TouchableOpacity style={styles.itemPay}>
                <View style={styles.radioBtn} >
                    <View style={[styles.dotInRadioBtn, { backgroundColor: isSelect ? 'black' : 'white' }]} />
                </View>
                <Text style={{ color: 'black' }}>{title}</Text>
            </TouchableOpacity>
        )
    }
    _renderPopup() {
        return (
            <Modal
                animationType="none"
                transparent={true}
                visible={this.state.popupVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <TouchableOpacity
                    onPress={() => this.setState({ popupVisible: false })}
                    style={styles.containerPopup}>
                    <TouchableWithoutFeedback>
                        <View style={styles.bodyPopup}>
                            <View style={styles.titlePayment}>
                                <Text style={styles.textPayment}>Payment</Text>
                            </View>
                            <View style={styles.lineGray} />

                            <View style={styles.radioContainer}>
                                {this._renderItemPay('Gamelancer funds ($0)', false)}
                                {this._renderItemPay('Payal', false)}
                                {this._renderItemPay('Credit card', true)}

                                {/* <TouchableOpacity style={styles.itemPay}>
                        <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: 'gray', marginRight: 10, justifyContent: 'center', alignItems: 'center' }} >
                            <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: 'white' }} />
                        </View>
                        <Text style={{ color: 'black' }}>Payal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemPay}>
                        <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: 'gray', marginRight: 10, justifyContent: 'center', alignItems: 'center' }} >
                            <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: 'white' }} />
                        </View>
                        <Text style={{ color: 'black' }}>Credit card</Text>
                    </TouchableOpacity> */}
                            </View>

                            <View style={{ width: width - 40, height: 45, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                                <View style={{ width: 200, height: 45, borderRadius: 5, borderWidth: 1, borderColor: 'gray' }}></View>
                            </View>
                            <View style={{ width: width - 40, height: 45, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                                <View style={{ width: 200, height: 45, borderRadius: 5, borderWidth: 1, borderColor: 'gray' }}></View>
                            </View>

                            <View style={{ width: width - 40, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                                <TouchableOpacity
                                    style={{ width: width - 60, height: 50, borderWidth: 1, borderColor: 'gray', alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray' }}
                                    onPress={() => this.setState({ popupVisible: false })}
                                >
                                    <Text>Pay</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                </TouchableOpacity>
            </Modal>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity
                    onPress={() => this.setState({ popupVisible: true })}
                    style={{
                        width: 100,
                        height: 50,
                        borderWidth: 1,
                        borderColor: 'gray',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Text>Payment</Text>
                </TouchableOpacity>
                {this._renderPopup()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerPopup: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 20,
    },
    bodyPopup: {
        height: 400,
        width: width - 40,
        backgroundColor: 'white'
    },
    titlePayment: {
        width: width - 40,
        height: 50,
        justifyContent: 'center'
    },
    textPayment: {
        color: 'black',
        fontSize: 18,
        margin: 20
    },
    lineGray: {
        width: width - 40,
        height: 1,
        backgroundColor: 'gray',
    },
    radioContainer: {
        width: width - 40,
        height: 120,
        padding: 20,
    },
    itemPay: {
        flexDirection: 'row',
        margin: 5,
    },
    radioBtn: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotInRadioBtn: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: 'black'
    }
})