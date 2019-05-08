import React, { Component } from 'react';
import {
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    SafeAreaView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Tags from "react-native-tags";

import TitleBar from '../components/TitleBar';
import AppStatusBar from '../components/AppStatusBar';

const CLAIM_BOUNTY_BUTTON_HEIGHT = 53;

export default class BountyDescriptionScreen extends Component {
    _renderTitleBar() {
        return (
            <TitleBar
                leading={
                    <TouchableOpacity>
                        <Image
                            style={screenStyles.iconBack}
                            source={require('../assets/ic_back.png')}
                        />
                    </TouchableOpacity>
                }
                title={
                    <Text style={screenStyles.screenTitle}>Bounty Description</Text>
                }
                backgroundColor="#01254F"
            />
        );
    }

    _renderBountyDescHeader() {
        return (
            <View style={screenStyles.descriptionHeader}>
                <Image
                    style={screenStyles.descHeaderWallpaper}
                    source={require('../assets/default_banner_game.jpg')}
                    resizeMode='cover'
                />
                <View
                    style={screenStyles.descHeaderInfo}
                >
                    <Text style={screenStyles.descHeaderInfoNormalText}>7 hours behind</Text>
                    <Text style={screenStyles.descHeaderInfoNormalText}>98% positive reviews (32)</Text>
                    <Text style={screenStyles.descHeaderInfoUsername}>Gamelancer Username</Text>
                    <Image
                        source={require('../assets/useravatar_demo.jpg')}
                        style={screenStyles.descHeaderInfoUserAvatar}
                        resizeMode='cover'
                    />
                </View>
            </View>
        );
    }

    _renderBountyDescJobTitle() {
        return (
            <View>
                <Text style={screenStyles.descJobTitle}>I will train you on Fortnite</Text>
                <Text style={screenStyles.screenNormalText}>Fortnite, PC</Text>
                <Tags
                    initialTags={["non-profit", "English"]}
                    onTagPress={(index, tagLabel, event, deleted) =>
                        alert(`TagIdx:${index} Label:${tagLabel} isDeleted:${deleted}`)
                    }
                    readonly={true}
                    renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
                        <TouchableOpacity style={{ borderRadius: 10, }} key={`${tag}-${index}`} onPress={onPress}>
                            <Text style={screenStyles.descJobTag}>{tag}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }

    _renderBountyDescJobRequire() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <Text style={screenStyles.screenNormalText}>Type</Text>
                    <Text style={screenStyles.screenBoldText}>Training</Text>
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={screenStyles.screenNormalText}>Session</Text>
                    <Text style={screenStyles.screenBoldText}>2 hours - $30h</Text>
                </View>
            </View>
        );
    }

    _renderBountyDescJobContent() {
        return (
            <Text style={screenStyles.screenNormalText}>This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content This is job content dkmm</Text>
        );
    }

    _renderWhiteSpaceWithLine() {
        return (
            <View
                style={{ height: StyleSheet.hairlineWidth, backgroundColor: 'white', marginVertical: 20 }}
            />
        );
    }

    _renderClaimBountyButton() {
        return (
            <TouchableOpacity
                style={screenStyles.claimBountyButton}
                onPress={() => alert("You clicked: Claim this Bounty")}
            >
                <Text style={screenStyles.claimBountyButtonText}>Claim this Bounty</Text>
            </TouchableOpacity>
        );
    }

    _renderBountyDescContent() {
        return (
            <View style={{ marginTop: 20, marginHorizontal: 20, marginBottom: 20 }}>
                {this._renderBountyDescJobTitle()}
                {this._renderWhiteSpaceWithLine()}
                {this._renderBountyDescJobRequire()}
                {this._renderWhiteSpaceWithLine()}
                {this._renderBountyDescJobContent()}
            </View>
        );
    }

    render() {
        return (
            <View style={screenStyles.container}>
                <AppStatusBar
                    backgroundColor='#011b38'
                    barStyle='light-content'
                />
                <LinearGradient
                    colors={["#004289", "#043265"]}
                    style={screenStyles.container}>
                    {this._renderTitleBar()}
                    <ScrollView style={{ marginBottom: CLAIM_BOUNTY_BUTTON_HEIGHT }}>
                        {this._renderBountyDescHeader()}
                        {this._renderBountyDescContent()}
                    </ScrollView>
                    {this._renderClaimBountyButton()}
                </LinearGradient>
            </View>
        );
    }
}

const screenStyles = StyleSheet.create({
    container: {
        flex: 1,
    },

    background: {
        width: "100%",
        height: "100%",
    },

    iconBack: {
        height: 25,
        width: 25,
        tintColor: 'white'
    },

    screenTitle: {
        color: 'white',
        fontSize: 17,
    },

    screenNormalText: {
        color: 'white'
    },

    screenBoldText: {
        color: 'white',
        fontWeight: 'bold',
    },

    descriptionHeader: {
        height: 200,
        width: '100%'
    },

    descHeaderWallpaper: {
        width: '100%',
        height: '100%'
    },

    descHeaderInfo: {
        width: '100%',
        height: '100%',
        paddingBottom: 10,
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.62)',
        flexDirection: 'column-reverse',
        alignItems: 'center',
    },

    descHeaderInfoUsername: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    descHeaderInfoNormalText: {
        color: 'white'
    },

    descHeaderInfoUserAvatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: 'white'
    },

    descJobTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,

    },

    descJobTag: {
        marginRight: 10,
        marginVertical: 10,
        borderRadius: 5,
        paddingVertical: 3,
        paddingHorizontal: 10,
        backgroundColor: '#b4c4d6',
        color: '#01254F',
    },

    claimBountyButton: {
        bottom: 0,
        height: CLAIM_BOUNTY_BUTTON_HEIGHT,
        position: 'absolute',
        width: '100%',
        backgroundColor: '#01254F',
        justifyContent: 'center'
    },

    claimBountyButtonText: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 18
    }
});