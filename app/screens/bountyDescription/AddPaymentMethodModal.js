import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView
} from 'react-native';
import { WhiteSpace, Button } from '@ant-design/react-native';
import { RadioGroup } from 'react-native-btr';
import { CheckBox } from 'react-native-elements';

const buttonPaymentMethod = [
    {
        label: "PayPal",
        value: 'paypal',
        size: 6,
        checked: false,
    },
    {
        label: "Credit Card",
        value: 'credit_card',
        size: 6,
        checked: false,
    }
];

export default class AddPaymentMethodModal extends Component {
    constructor() {
        super();
        this.state = {
            paymentMethod: '',
            saveInfoForFuture: false,
        }
    }

    _toggleSaveInfoCheckbox = () => {
        const { saveInfoForFuture } = this.state;
        this.setState({
            saveInfoForFuture: !saveInfoForFuture,
        });
    }

    _renderButtonPay() {
        return (
            <Button
                style={{ height: 45 }}
            >
                Pay $64
            </Button>
        );
    }

    _renderPaymentInputInfo() {
        const { 
            paymentMethod, saveInfoForFuture
        } = this.state;
        return (
            <View>
                {
                    paymentMethod === 'paypal'
                        ? <View>
                            <WhiteSpace />
                            <Text>You will be redirected to paypal.com to complete this payment.</Text>
                            <WhiteSpace />
                            {this._renderButtonPay()}
                        </View>
                        : paymentMethod === 'credit_card'
                            ? <ScrollView>
                                <WhiteSpace size='md' />
                                <Text>Name on card</Text>
                                <WhiteSpace />
                                <TextInput
                                    style={addPaymentMethodStyle.inputTextStyle}
                                    multiline
                                />
                                <WhiteSpace size='md' />
                                <Text>Card number</Text>
                                <WhiteSpace />
                                <TextInput
                                    style={addPaymentMethodStyle.inputTextStyle}
                                    multiline
                                />
                                <WhiteSpace size='md' />
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 1, marginRight: 10 }}>
                                        <Text>Expiry date</Text>
                                        <WhiteSpace />
                                        <TextInput
                                            style={addPaymentMethodStyle.inputTextStyle}
                                            multiline
                                        />
                                    </View>
                                    <View style={{ flex: 1, marginLeft: 10 }}>
                                        <Text>Security Code</Text>
                                        <WhiteSpace />
                                        <TextInput
                                            style={addPaymentMethodStyle.inputTextStyle}
                                            multiline
                                        />
                                    </View>
                                </View>
                                <CheckBox
                                    containerStyle={{
                                        backgroundColor: 'transparent',
                                        borderColor: 'transparent',
                                    }}
                                    textStyle={{
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                    }}
                                    title='Save for future payments'
                                    onPress={this._toggleSaveInfoCheckbox}
                                    checked={saveInfoForFuture}
                                />
                                {this._renderButtonPay()}
                            </ScrollView>
                            : null
                }
            </View>
        );
    }

    _onPressRadioButtonPaymentMethod = (btnData) => {
        btnData.map(btnDat => {
            if (btnDat.checked === true) {
                this.setState({
                    paymentMethod: btnDat.value,
                });
            }
        });
    }

    render() {
        return (
            <View style={addPaymentMethodStyle.container}>
                <WhiteSpace />
                <RadioGroup
                    radioButtons={buttonPaymentMethod}
                    onPress={this._onPressRadioButtonPaymentMethod}
                />
                {this._renderPaymentInputInfo()}
            </View>
        );
    }
}

const addPaymentMethodStyle = StyleSheet.create({
    container: {
        width: '100%',
    },

    modalTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
    },

    inputTextStyle: {
        height: 45,
        textAlignVertical: 'top',
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
    }
});