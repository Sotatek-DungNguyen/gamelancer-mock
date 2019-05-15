import React, { Component } from 'react';
import { View, Modal, TouchableOpacity, TouchableWithoutFeedback, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class PaymentModal extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        popupVisible: false,
        indexCurrentRadioSelected: 2,
        radioButtons: [
            {
                title: 'Gamelancer funds($0)',
                checked: false
            },
            {
                title: 'Paypal',
                checked: false
            },
            {
                title: 'Credit card',
                checked: true
            }
        ]
    }


    _renderRadioButtons() {
        return this.state.radioButtons.map((radio, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    style={styles.itemPay}
                    onPress={() => this._selectRadioButton(radio, index)}
                >
                    <View style={styles.radioBtn} >
                        <View style={[styles.dotInRadioBtn, { backgroundColor: radio.checked ? 'black' : 'white' }]} />
                    </View>
                    <Text style={{ color: 'black' }}>{radio.title}</Text>
                </TouchableOpacity>
            )
        })
    }

    _selectRadioButton = (radio, index) => {
        if (this.state.indexCurrentRadioSelected !== index) {
            radio.checked = !radio.checked;
            if (this.state.indexCurrentRadioSelected !== -1) {
                const current = this.state.radioButtons[this.state.indexCurrentRadioSelected];
                current.checked = !current.checked;
                this.state.radioButtons[this.state.indexCurrentRadioSelected] = current;
            }
            this.state.radioButtons[index] = radio;
            this.setState({
                radioButtons: this.state.radioButtons,
                indexCurrentRadioSelected: index
            })

        }
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
                                {this._renderRadioButtons()}
                            </View>

                            <View style={styles.personal}>
                                <TouchableOpacity style={styles.personalInput}>
                                    <Text>Pesonal 5529</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.personal}>
                                <TouchableOpacity style={styles.personalInput}>
                                    <Text>Add new card </Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity
                                style={styles.buttonPay}
                                onPress={() => this.setState({ popupVisible: false })}
                            >
                                <Text style={styles.textButtonPay}>Pay $64</Text>
                            </TouchableOpacity>

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
        // justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 20,
    },
    bodyPopup: {
        height: 420,
        width: width - 40,
        backgroundColor: 'white',
        marginTop: 50,
        alignItems: 'center',
    },
    titlePayment: {
        width: width - 40,
        height: 50,
        justifyContent: 'center'
    },
    textPayment: {
        color: 'black',
        fontSize: 18,
        margin: 20,
        fontWeight: 'bold'
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
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: 'black'
    },
    personal: {
        width: width - 40,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    personalInput: {
        width: width - 140,
        height: 45,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'center',
        paddingLeft: 20
    },
    buttonPay: {
        width: width - 80,
        height: 60,
        borderWidth: 1,
        borderColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EEEEEE',
        margin: 30,
    },
    textButtonPay: {
        fontSize: 18,
        color: 'black'
    }
})