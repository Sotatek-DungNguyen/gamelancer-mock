import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Modal,
    TextInput,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import EditBountyStyles from './EditBounty.styles';
import PostBountyItemPlatform from '../PostBounty/PostBountyItemPlatform';

export default class EditBounty extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        isTraining: true,
        isPlayAlong: false,
        modalRemoveVisible: false
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
    _setVisibleRemoveModal = (visible) => {
        this.setState({
            modalRemoveVisible: visible
        })
    }

    _renderRemoveBountyModal = () => {
        return (
            <Modal
                animationType="none"
                transparent={true}
                visible={this.state.modalRemoveVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <TouchableOpacity
                    onPressOut={() => this._setVisibleRemoveModal(false)}
                    style={EditBountyStyles.modalRemoveContainer}
                >
                    <TouchableWithoutFeedback>
                        <View style={EditBountyStyles.modalRemove}>
                            <Text style={{ fontWeight: 'bold' }}>Are you sure you want</Text>
                            <Text style={{ fontWeight: 'bold' }}>to remove this bounty?</Text>
                            <View style={[EditBountyStyles.buttonRemoveSaveContainer, { top: 30 }]}>
                                <TouchableOpacity style={EditBountyStyles.buttonRemove_Save}>
                                    <Text style={EditBountyStyles.largText}>Remove Bounty</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this._setVisibleRemoveModal(false)}
                                    style={[EditBountyStyles.buttonRemove_Save, { backgroundColor: '#E0E0E0' }]}
                                >
                                    <Text style={EditBountyStyles.largText}>Cancel</Text>
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
            <View style={EditBountyStyles.container}>

                {/* Header */}
                <View style={EditBountyStyles.header}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/ic_bounty_flow/back16.png')} />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 20, fontSize: 20, color: 'black' }}>Fortnite</Text>
                    <TouchableOpacity style={{ marginLeft: 10, marginTop: 5 }}>
                        <Image source={require('../../../assets/ic_bounty_flow/down_arrow.png')} />
                    </TouchableOpacity>
                </View>

                {/* Body */}
                <View style={EditBountyStyles.body}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{ flex: 1 }}
                    >
                        {/* Platform */}
                        <View style={EditBountyStyles.platform}>
                            <Text style={EditBountyStyles.largText}>Platform</Text>
                            <View style={EditBountyStyles.itemPlatform}>
                                <PostBountyItemPlatform title='PS4' />
                                <PostBountyItemPlatform title='Xbox One' />
                                <PostBountyItemPlatform title='Nintendo Switch' />
                            </View>
                        </View>

                        {/* thumbnail */}
                        <View >
                            <TouchableOpacity style={EditBountyStyles.thumbnail}>
                                <Text style={EditBountyStyles.normalText}>Upload a thumbnail</Text>
                            </TouchableOpacity>
                        </View>

                        {/* title */}
                        <View style={EditBountyStyles.title}>
                            <Text style={EditBountyStyles.normalText}>Title</Text>
                            <TextInput
                                numberOfLines={1}
                                style={EditBountyStyles.inputTitle} />
                        </View>

                        {/* Service */}
                        <View style={EditBountyStyles.title}>
                            <Text style={EditBountyStyles.normalText}>Service</Text>
                            <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: 10 }}>
                                <View style={EditBountyStyles.itemService}>
                                    {this._showRadioButton(this.state.isTraining)}
                                    <Text style={{ color: 'black' }}> Training</Text>
                                </View>
                                <View style={EditBountyStyles.itemService}>
                                    {this._showRadioButton(this.state.isPlayAlong)}
                                    <Text style={{ color: 'black' }}>Play along</Text>
                                </View>
                            </View>
                        </View>

                        {/* Price/hr - Session time */}
                        <View style={EditBountyStyles.priceSession}>
                            <View style={EditBountyStyles.price}>
                                <Text style={EditBountyStyles.normalText}>Price/hr</Text>
                                <TextInput
                                    placeholder='$32'
                                    placeholderTextColor='gray'
                                    numberOfLines={1}
                                    style={EditBountyStyles.inputPrice} />
                            </View>
                            <View style={EditBountyStyles.price}>
                                <Text style={EditBountyStyles.normalText}>Session time</Text>
                                <TextInput
                                    numberOfLines={1}
                                    style={EditBountyStyles.inputPrice}
                                />
                            </View>
                        </View>
                        <View style={{ height: 10 }}></View>
                    </ScrollView>
                </View>
                {/* Button Remove - Save */}
                <View style={EditBountyStyles.buttonRemoveSaveContainer}>
                    <TouchableOpacity
                        onPress={() => this._setVisibleRemoveModal(true)}
                        style={EditBountyStyles.buttonRemove_Save}
                    >
                        <Text style={EditBountyStyles.largText}>Remove Bounty</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[EditBountyStyles.buttonRemove_Save, { backgroundColor: '#E0E0E0' }]}>
                        <Text style={EditBountyStyles.largText}>Save</Text>
                    </TouchableOpacity>
                </View>

                {this._renderRemoveBountyModal()}
            </View >
        );
    }
}