import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TextInput
} from 'react-native';
import { WhiteSpace, Button } from '@ant-design/react-native';

export default class VerifyAccountModal extends Component {
    render() {
        const { onClickSubmitCode, onClickResendCode } = this.props;
        return (
            <View style={modalVerifyEmail.container}>
                <WhiteSpace size='xl' />
                <WhiteSpace size="md" />
                <Text style={modalVerifyEmail.verifyTitle}>Verify your Gamelancer account</Text>
                <WhiteSpace size="xl" />
                <Text style={modalVerifyEmail.verifyMessage}>In order to claim a bounty you need to verify your account. The verification code will be sent to sample@mail.com</Text>
                <WhiteSpace size="xl" />
                <WhiteSpace size="md" />
                <TextInput
                    style={modalVerifyEmail.codeInputText}
                    placeholder="000 - 000"
                />
                <WhiteSpace size='lg' />
                <Button
                    activeStyle={modalVerifyEmail.submitButtonOnActive}
                    onPress={onClickSubmitCode}
                    style={modalVerifyEmail.submitButton}
                >
                    <Text style={{ color: 'white' }}>Submit</Text>
                </Button>
                <WhiteSpace />
                <Button
                    onPress={onClickResendCode}
                    style={modalVerifyEmail.resendCodeButton}
                >
                    <Text>Resend Code</Text>
                </Button>
            </View>
        );
    }
}

const modalVerifyEmail = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center'
    },

    verifyTitle: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
        marginHorizontal: 30,
        fontWeight: 'bold',
    },

    verifyMessage: {
        color: 'black',
        textAlign: 'center',
        marginHorizontal: 30
    },

    codeInputText: {
        width: Dimensions.get('window').width - 40,
        textAlign: 'center',
        height: 45,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth
    },

    submitButton: {
        width: Dimensions.get('window').width - 40,
        height: 45,
        borderRadius: 10,
        backgroundColor: '#01254F',
    },

    submitButtonOnActive: {
        backgroundColor: '#004aa0',
    },

    resendCodeButton: {
        width: Dimensions.get('window').width - 40,
        height: 45,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: StyleSheet.hairlineWidth
    }
});