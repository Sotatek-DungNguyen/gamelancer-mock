import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native'

export default class TitleBar extends Component {
    render() {
        const {
            leading = null, title, trailing = null, backgroundColor, underline = false, underlineColor = "transparent"
        } = this.props;
        return (
            <View>
                <View style={[screenStyles.container, { backgroundColor }]}>
                    <View style={{ flexDirection: 'row' }}>
                        {
                            leading != null 
                            ? <View style={screenStyles.leadingDefault}>{leading}</View>
                            : null
                        }
                        <View style={screenStyles.titleDefault}>{title}</View>
                    </View>
                    {
                        trailing != null
                        ? <View style={screenStyles.trailingDefault}>{trailing}</View>
                        : null
                    }
                </View>
                {
                    underline
                        ? <View
                            style={{ height: StyleSheet.hairlineWidth, backgroundColor: underlineColor }}
                        />
                        : null
                }
            </View>
        );
    }
}

const screenStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    leadingDefault: {
        margin: 10,
        justifyContent: 'center',
    },

    titleDefault: {
        marginHorizontal: 10,
        justifyContent: 'center',
    },

    trailingDefault: {
        margin: 10,
        justifyContent: 'center',
    }
});