import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('screen');
export default class BountyListScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      bounties: [
        { key: '1', title: 'I will training you on CSGO', price: 10, tags: ['eng', 'training'] },
        { key: '2', title: 'I will training you on CSGO', price: 10, tags: ['eng', 'training'] },
        { key: '3', title: 'I will training you on CSGO', price: 10, tags: ['eng', 'training'] },
        { key: '4', title: 'I will training you on CSGO', price: 10, tags: ['eng', 'training'] },
      ],
    };
  }

  _renderHeader() {
    return (
      <View style={styles.header}>
        <Text>
          {'326 bounties for fortnite for pc'.toUpperCase()}
        </Text>
      </View>
    );
  }

  _renderBountyList() {
    return (
      <FlatList
        keyExtractor={item => item.key}
        data={this.state.bounties}
        numColumns={2}
        renderItem={ ({item}) => this._renderBounty(item) }
      />
    );
  }

  renderTag(item, index) {
    return (
      <View 
        style={ styles.tagsName }
        key={ index }
        >
        <Text style={{ fontWeight: 'bold'}}>{item}</Text>
      </View>
    );
  }

  _renderBounty (item) {
    return (
      <View style={ styles.bountyItem }>
        <View>
          <Image source={require('../../assets/image/pubg.png')} style={{width: 190, height: 110}} resizeMode='cover'/>
          <Image source={require('../../assets/image/user.png')} style={{ width: 32, height: 32, backgroundColor: '#BDBDBD', borderRadius: 25, position: 'absolute', marginTop: 94, marginLeft: 16}}/>
        </View>
        <View style={{ marginTop: 24, marginHorizontal: 8, flexDirection: "row", justifyContent: 'space-between'}}>
          <Text style={{ fontWeight: 'bold', maxWidth: 120}}>{item.title}</Text>
          <Text style={{ fontWeight: 'bold', maxWidth: 120}}>{`$${item.price}/hr`}</Text>
        </View>
        <View style={ styles.tags }>
            {item.tags.map((item, index) => this.renderTag(item, index))}
          </View>
        <TouchableOpacity style={{ flex: 1, height: 32, backgroundColor: '#BDBDBD', margin: 8, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', }}>CLAIM</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={ styles.container }>
       {this._renderHeader()}
       <View style={ styles.bounties }>
          {this._renderBountyList()}
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  header: {
    height: 56,
    justifyContent: 'center',
    padding: 16
  },
  bounties: {
    flex: 1,
    alignItems: 'center',
  },
  bountyItem: {
    marginTop: 12,
    marginLeft: 8,
    backgroundColor: 'white',
  },
  tags: {
    marginTop: 40,
    flexDirection: 'row',
  },
  tagsName: {
    padding: 4,
    backgroundColor: '#E0E0E0',
    padding: 4,
    marginLeft: 4,
    borderRadius: 5
  }
})
