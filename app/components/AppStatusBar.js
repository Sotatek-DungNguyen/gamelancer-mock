import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default class AppStatusBar extends Component {
    render() {
        const { backgroundColor, barStyle } = this.props;
        return (
            <View style={{ height: getStatusBarHeight(), backgroundColor }}>
                <StatusBar
                    backgroundColor={backgroundColor}
                    translucent={true}
                    barStyle={barStyle}
                />
            </View>
        );
    }
}