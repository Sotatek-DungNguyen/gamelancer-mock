import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';

export default class ChatsScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      newClaims: [
        { name: 'Tracyman', messages: [`Hey dude, let's start again`], timestamp: '1557497410' },
        { name: 'Tracyman', messages: [`Hey dude, let's start again`], timestamp: '1557497411' },
      ],
      pastGames: [
        { name: 'Nathaniel Boone', messages: ['The LASIK surgeon uses computer software to guide the IntraLase laser beam'], timestamp: '1557497415' },
        { name: 'Derek Webster', messages: ['The LASIK surgeon uses computer software to guide the IntraLase laser beam'], timestamp: '1557497410' },
        { name: 'Jon Alvarez', messages: ['The LASIK surgeon uses computer software to guide the IntraLase laser beam'], timestamp: '1557497412' },
        { name: 'Anne Colon', messages: ['The LASIK surgeon uses computer software to guide the IntraLase laser beam'], timestamp: '1557497413' }
      ],
    }
  }

  _renderConversation(item, type) {
    console.log('==============================================');
    console.log(item.messages.length);
    console.log('==============================================');
    return (
      <View style={ styles.conversation }>
        <Image 
          style={ styles.avatar }
          source={require('../../assets/image/user.png')}/>
        <View style={ styles.contentConversation }>
          <Text style={{ fontSize: 16, maxWidth: 260 }} numberOfLines={1} >{item.name}</Text>
          <Text style={{ fontSize: 12, maxWidth: 260 }} numberOfLines={2} >{item.messages[item.messages.length - 1]}</Text>
        </View>
        {(type === 'New claims') ? (
          <View>
            <View style={ styles.badge }>
              <Text style={{ color: 'white' }}>1</Text>
            </View>
            <Text style={{ fontSize: 10}}>14:02</Text>
          </View>
        ): null }
      </View>
    );
  }

  _renderSectionList(name, data) {
    return (
      <View style={ styles.newClaimsContainer }>
        <View>
          <Text>{name}</Text>
        </View>
        <FlatList
          keyExtractor={item => item.timestamp}
          data={data}
          renderItem={ ({item}) => this._renderConversation(item, name) }
        />
      </View>
    );
  }

  render() {
    return (
      <View style={ styles.container}>
        {this._renderSectionList('New claims', this.state.newClaims)}
        <View style={ styles.divider }>
          <View style={{ flex: 1, backgroundColor: 'grey', }}></View>
        </View>
        {this._renderSectionList('Past games', this.state.pastGames)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  newClaimsContainer: {
    paddingHorizontal: 16,
    marginVertical: 24
  },
  conversation: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24 
  },
  contentConversation: {
    marginLeft: 16,
    flex: 1
  },
  badge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  divider: {
    height: 0.5,
    paddingHorizontal: 16
  },
})
