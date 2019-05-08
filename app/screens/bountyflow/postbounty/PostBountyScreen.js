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
import PostBountyStyles from './PostBountyStyles';
import ItemPlatform from './ItemPlatform';

export default class PostBountyScreen extends Component {
    state = {}
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
                            <Text style={PostBountyStyles.textOpacity}>
                                Bounties with s custom thumbnail rank higher
                            </Text>
                        </View>

                        {/* title */}
                        <View style={PostBountyStyles.title}>
                            <Text style={{ fontSize: 14, color: 'black' }}>Title</Text>
                            <TextInput
                                numberOfLines={1}
                                style={PostBountyStyles.inputTitle} />
                        </View>

                        {/* Description */}
                        <View style={PostBountyStyles.title}>
                            <Text style={{ fontSize: 14, color: 'black' }}>Description</Text>
                            <TextInput
                                numberOfLines={1}
                                style={PostBountyStyles.inputTitle} />
                        </View>

                        {/* Service */}
                        <View style={PostBountyStyles.title}>
                            <Text style={{ fontSize: 14, color: 'black' }}>Service</Text>
                            <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: 10 }}>
                                <View style={PostBountyStyles.itemService}>
                                    <TouchableOpacity style={{ margin: 5 }}>
                                        <Image source={require('../../../assets/ic_bounty_flow/circle_outline24.png')} />
                                    </TouchableOpacity>
                                    <Text style={{ color: 'black' }}> Training</Text>
                                </View>
                                <View style={PostBountyStyles.itemService}>
                                    <TouchableOpacity style={{ margin: 5 }}>
                                        <Image source={require('../../../assets/ic_bounty_flow/circle_outline24.png')} />
                                    </TouchableOpacity>
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
                                    style={PostBountyStyles.inputPrice} />
                            </View>
                        </View>

                        {/* Receive */}
                        <View style={PostBountyStyles.receive}>

                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={{ color: 'black', fontSize: 12 }}>You receive   </Text>
                                <Image source={require('../../../assets/ic_bounty_flow/question.png')} />
                                <Text style={{ color: 'black', fontSize: 12, textAlign: 'right', flex: 1 }}> $28.80/hr</Text>
                            </View>

                            <View style={PostBountyStyles.line} />

                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={{ color: 'black', fontSize: 12 }}>10% Fee   </Text>
                                <Image source={require('../../../assets/ic_bounty_flow/question.png')} />
                                <Text style={{ marginLeft: 20, color: 'black', fontSize: 12, textAlign: 'right', flex: 1 }}> $3.2/hr</Text>
                            </View>

                        </View>

                        {/* Donate to a charity */}
                        <View style={PostBountyStyles.title}>
                            <Text style={{ fontSize: 14, color: 'black', marginTop: 20 }}>Want to donate to a charity?</Text>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <TextInput
                                    placeholder='Select a cause'
                                    placeholderTextColor='gray'
                                    numberOfLines={1}
                                    style={PostBountyStyles.inputCause} />
                                <TextInput
                                    style={PostBountyStyles.inputDonate}
                                    placeholder='25%'
                                    placeholderTextColor='gray' />
                            </View>
                            <Text style={PostBountyStyles.textOpacity}>
                                We charge only transactional costs for charitable bounties
                            </Text>
                        </View>


                        <View style={{ height: 10 }}></View>
                    </ScrollView>
                </View>

                {/* Button Post Bounty */}
                <TouchableOpacity style={PostBountyStyles.buttonPost}>
                    <Text style={{ fontSize: 20, color: 'black' }}>Post Bounty</Text>
                </TouchableOpacity>

            </View >
        );
    }
}