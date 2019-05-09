import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modalbox';

import PostBountyStyles from './PostBountyStyles';
import ItemPlatform from './ItemPlatform';

export default class EditBountyScreen extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        isTraining: true,
        isPlayAlong: false
    }

    _selectService = () => {
        if (this.state.isTraining) {
            this.setState({
                isTraining: false,
                isPlayAlong: true,
            })
        } else {
            this.setState({
                isTraining: true,
                isPlayAlong: false,
            })
        }
    }
    _showRadioButton(bool) {
        return bool ?
            <TouchableOpacity
                onPress={() => this._selectService()}
                style={{ margin: 5 }}
            >
                <Image source={require('../../../assets/ic_bounty_flow/dot_in_circle.png')} />
            </TouchableOpacity> :
            <TouchableOpacity
                onPress={() => this._selectService()}
                style={{ margin: 5 }}
            >
                <Image source={require('../../../assets/ic_bounty_flow/circle_outline2.png')} />
            </TouchableOpacity>
    }

    _renderModalRemove() {
        return (
            <Modal
                ref={"modalRemove"}
                swipeToClose={false}
                position='bottom'
                backButtonClose={false}
                style={PostBountyStyles.modalRemove}
            >
                <Text style={{ fontWeight: 'bold' }}>Are you sure you want</Text>
                <Text style={{ fontWeight: 'bold' }}>to remove this bounty?</Text>

                <View style={[PostBountyStyles.buttonRemoveSaveContainer, { top: 30 }]}>
                    <TouchableOpacity style={PostBountyStyles.buttonRemove_Save}>
                        <Text style={{ fontSize: 18 }}>Remove Bounty</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[PostBountyStyles.buttonRemove_Save, { backgroundColor: '#E0E0E0' }]}>
                        <Text style={{ fontSize: 18 }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Modal >
        )
    }

    render() {
        return (
            <View style={PostBountyStyles.container}>

                {/* Header */}
                <View style={PostBountyStyles.header}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/ic_bounty_flow/back16.png')} />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 20, fontSize: 20, color: 'black' }}>Fortnite</Text>
                    <TouchableOpacity style={{ marginLeft: 10, marginTop: 5 }}>
                        <Image source={require('../../../assets/ic_bounty_flow/down_arrow.png')} />
                    </TouchableOpacity>
                </View>

                {/* Body */}
                <View style={PostBountyStyles.body}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{ flex: 1 }}
                    >
                        {/* Platform */}
                        <View style={PostBountyStyles.platform}>
                            <Text style={{ color: 'black', fontSize: 18 }}>Platform</Text>
                            <View style={PostBountyStyles.itemPlatform}>
                                <ItemPlatform title='PS4' />
                                <ItemPlatform title='Xbox One' />
                                <ItemPlatform title='Nintendo Switch' />
                            </View>
                        </View>

                        {/* thumbnail */}
                        <View >
                            <TouchableOpacity style={PostBountyStyles.thumbnail}>
                                <Text style={{ color: 'black', fontSize: 16 }}>Upload a thumbnail</Text>
                            </TouchableOpacity>
                        </View>

                        {/* title */}
                        <View style={PostBountyStyles.title}>
                            <Text style={{ fontSize: 14, color: 'black' }}>Title</Text>
                            <TextInput
                                numberOfLines={1}
                                style={PostBountyStyles.inputTitle} />
                        </View>

                        {/* Service */}
                        <View style={PostBountyStyles.title}>
                            <Text style={{ fontSize: 14, color: 'black' }}>Service</Text>
                            <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: 10 }}>
                                <View style={PostBountyStyles.itemService}>
                                    {this._showRadioButton(this.state.isTraining)}
                                    <Text style={{ color: 'black' }}> Training</Text>
                                </View>
                                <View style={PostBountyStyles.itemService}>
                                    {this._showRadioButton(this.state.isPlayAlong)}
                                    <Text style={{ color: 'black' }}>Play along</Text>
                                </View>
                            </View>
                        </View>

                        {/* Price/hr - Session time */}
                        <View style={PostBountyStyles.priceSession}>
                            <View style={PostBountyStyles.price}>
                                <Text style={{ fontSize: 14, color: 'black' }}>Price/hr</Text>
                                <TextInput
                                    placeholder='$32'
                                    placeholderTextColor='gray'
                                    numberOfLines={1}
                                    style={PostBountyStyles.inputPrice} />
                            </View>
                            <View style={PostBountyStyles.price}>
                                <Text style={{ fontSize: 14, color: 'black' }}>Session time</Text>
                                <TextInput
                                    numberOfLines={1}
                                    style={PostBountyStyles.inputPrice}
                                />
                            </View>
                        </View>
                        <View style={{ height: 10 }}></View>
                    </ScrollView>
                </View>
                {/* Button Remove - Save */}
                <View style={PostBountyStyles.buttonRemoveSaveContainer}>
                    <TouchableOpacity
                        onPress={() => this.refs.modalRemove.open()}
                        style={PostBountyStyles.buttonRemove_Save}
                    >
                        <Text style={{ fontSize: 18 }}>Remove Bounty</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[PostBountyStyles.buttonRemove_Save, { backgroundColor: '#E0E0E0' }]}>
                        <Text style={{ fontSize: 18 }}>Save</Text>
                    </TouchableOpacity>
                </View>

                {this._renderModalRemove()}
            </View >
        );
    }
}