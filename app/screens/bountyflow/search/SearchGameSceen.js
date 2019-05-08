import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Dimensions,
    Image,
    FlatList,
    TextInput
} from 'react-native';
import SearchStyles from './SearchStyles';

const { width, height } = Dimensions.get('screen');

export default class SearchGameSceen extends Component {

    constructor(props) {
        super(props)
    }
    state = {
        searching: false,
        data: [
            { key: '1', name: 'CSGO', image: require('../../../assets/ic_bounty_flow/csgo.jpg') },
            { key: '2', name: 'Fortnite', image: require('../../../assets/ic_bounty_flow/fortnite.jpg') },
            { key: '3', name: 'MTGV', image: require('../../../assets/ic_bounty_flow/csgo.jpg') },
            { key: '4', name: 'Rainbow', image: require('../../../assets/ic_bounty_flow/rainbow.jpg') },
            { key: '5', name: 'PUBG', image: require('../../../assets/ic_bounty_flow/pubg.jpg') },
            { key: '6', name: 'Destiny six begisd', image: require('../../../assets/ic_bounty_flow/destiny.jpg') },
            { key: '7', name: 'CSGO', image: require('../../../assets/ic_bounty_flow/csgo.jpg') },
            { key: '8', name: 'Fortnite', image: require('../../../assets/ic_bounty_flow/fortnite.jpg') },
            { key: '9', name: 'MTGV', image: require('../../../assets/ic_bounty_flow/csgo.jpg') },
            { key: '10', name: 'Rainbow', image: require('../../../assets/ic_bounty_flow/rainbow.jpg') },
            { key: '11', name: 'PUBG', image: require('../../../assets/ic_bounty_flow/pubg.jpg') },
            { key: '12', name: 'Destiny', image: require('../../../assets/ic_bounty_flow/destiny.jpg') },
        ]
    }

    _keyExtractor = (item) => item.key

    _renderItem = ({ item }) => (
        <TouchableOpacity style={SearchStyles.item}>
            <Image style={SearchStyles.imageGame} source={item.image} />
            <Text style={SearchStyles.titleGame}>{item.name}</Text>
        </TouchableOpacity>
    )

    _showIconSearch = () => {
        if (!this.state.searching) {
            return (
                <Image style={SearchStyles.iconSearch} source={require('../../../assets/ic_bounty_flow/searchwhite.png')} />
            )
        }
    }

    _onNext = () => {
        this.props.navigation.navigate('Post')
    }

    render() {
        return (
            <View style={SearchStyles.container}>
                <View style={SearchStyles.header}>
                    {this._showIconSearch()}
                    <TextInput
                        style={SearchStyles.inputSearch}
                        placeholder='            Search a game'
                        placeholderTextColor='white'
                        onFocus={() => this.setState({ searching: true })}
                    />

                </View>
                <View style={SearchStyles.body}>
                    <FlatList
                        style={{ flex: 1, margin: 10 }}
                        data={this.state.data}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        numColumns={3}
                    />
                </View>
                <View style={SearchStyles.bottom}>
                    <TouchableOpacity
                        style={SearchStyles.buttonNext}
                        onPress={() => this._onNext()}
                    >
                        <Text style={SearchStyles.nextText}>NEXT</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
