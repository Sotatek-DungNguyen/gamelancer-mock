import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';


export default class PostBountyItemPlatform extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{ width: 70, flexDirection: 'column', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 60, height: 34, borderWidth: 1, marginTop: 10, marginRight: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D0D1D3' }}>
                    <Text>icon</Text>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', fontSize: 14, marginTop: 5,color:'black' }}>{this.props.title}</Text>
            </View>
        );
    }
}