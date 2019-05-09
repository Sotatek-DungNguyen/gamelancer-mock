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
        currentSelect: -1,
        data: [
            { key: '1', name: 'Counter Strike Global Offensive', image: require('../../../assets/ic_bounty_flow/csgo.jpg'), isSelect: false },
            { key: '2', name: 'Fortnite', image: require('../../../assets/ic_bounty_flow/fortnite.jpg'), isSelect: false },
            { key: '3', name: 'MTGV', image: require('../../../assets/ic_bounty_flow/csgo.jpg'), isSelect: false },
            { key: '4', name: 'Rainbow Six Seige', image: require('../../../assets/ic_bounty_flow/rainbow.jpg'), isSelect: false },
            { key: '5', name: `PlayerUnknown's Battlegrounds`, image: require('../../../assets/ic_bounty_flow/pubg.jpg'), isSelect: false },
            { key: '6', name: 'Destiny 2', image: require('../../../assets/ic_bounty_flow/destiny.jpg'), isSelect: false },
            { key: '7', name: 'CSGO', image: require('../../../assets/ic_bounty_flow/csgo.jpg'), isSelect: false },
            { key: '8', name: 'Fortnite', image: require('../../../assets/ic_bounty_flow/fortnite.jpg'), isSelect: false },
            { key: '9', name: 'MTGV', image: require('../../../assets/ic_bounty_flow/csgo.jpg') },
            { key: '10', name: 'Rainbow', image: require('../../../assets/ic_bounty_flow/rainbow.jpg'), isSelect: false },
            { key: '11', name: 'PUBG', image: require('../../../assets/ic_bounty_flow/pubg.jpg') },
            { key: '12', name: 'Destiny', image: require('../../../assets/ic_bounty_flow/destiny.jpg'), isSelect: false },
        ]
    }

    _keyExtractor = (item) => item.key

    _renderItem = ({ item, index }) => (
        < TouchableOpacity
            onPress={() => this._selectItem({ item, index })}
            style={item.isSelect ? SearchStyles.itemSelected : SearchStyles.item}
        >
            <Image style={SearchStyles.imageGame} source={item.image} />
            <Text style={SearchStyles.titleGame}>{item.name}</Text>
            {/* <Image style={{ position: 'absolute', bottom: 4, right: 4 }} source={require('../../../assets/ic_bounty_flow/circle_tick.png')} /> */}
            {this._showIconSelect(item.isSelect)}
        </TouchableOpacity>
    )
    _showIconSelect(isSelect) {
        return isSelect ? <Image
            style={{ position: 'absolute', bottom: 2, right: 2 }}
            source={require('../../../assets/ic_bounty_flow/circle_tick.png')}
        /> : <View></View>
    }

    _selectItem = ({ item, index }) => {

        // if (index === this.state.itemSelected)
        console.log("item : " + item)
        console.log("index : " + index)

        item.isSelect = !item.isSelect;
        const indexItem = this.state.data.findIndex(temp => item.key === temp.key);
        this.state.data[indexItem] = item;

        if (this.state.currentSelect !== -1 && index !== this.state.currentSelect) {

            const current = this.state.data[this.state.currentSelect]
            current.isSelect = !current.isSelect;
            this.state.data[this.state.currentSelect] = current;
        }

        const refeshData = this.state.data;
        this.setState({
            data: refeshData,
            currentSelect: index === this.state.currentSelect ? -1 : index
        })
    }

    _showIconSearch = () => {
        if (!this.state.searching) {
            return (
                <Image style={SearchStyles.iconSearch} source={require('../../../assets/ic_bounty_flow/searchwhite.png')} />
            )
        }
    }

    _onNext = () => {
        this.props.navigation.navigate('Edit')
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
