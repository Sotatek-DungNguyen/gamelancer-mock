import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import { WhiteSpace, Button } from '@ant-design/react-native';

export default class SentPayBountyRequestModal extends Component {
    render() {
        const { onClickEndButton } = this.props;
        return (
            <View style={modalStyles.container}>
                <View style={{ marginHorizontal: 40, alignItems: 'center', marginBottom: 56 }}>
                    <Image
                        source={require('../../assets/green_tick_successful.png')}
                        style={modalStyles.tickIcon}
                        resizeMode='cover'
                    />
                    <WhiteSpace size="xl"/>
                    <Text style={modalStyles.text}>We will let you know when the gamelancers accepts yout claim so you can both start playing.</Text>
                </View>
                <Button
                    style={modalStyles.endButton}
                    onPress={onClickEndButton}
                >
                    End
                </Button>
            </View>
        );
    }
}

const modalStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    tickIcon: {
        width: 100, 
        height: 100,
    },

    text: {
        color: 'black',
        textAlign: 'center'
    },

    endButton: { 
        width: '100%',
        position: 'absolute',
        height: 56,
        bottom: 0 
    }
});