import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput, TouchableOpacity,
  Dimensions } from 'react-native';
import Modal from "react-native-modal";
import { CommonStyles } from '../../utils/CommonStyles';

export default class ChatsScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      isMessageOfCurrentUser: false,
      id: '1',
      type: 'new-claim',
      isModalVisible: false,
      messages: [
        { content: `Hey! I'm trying to improve my game, would love to train with you for 2 hours now`, ifFrom: '0', idTo: '1', haveAvatar: false,  timestamp: '1557497410'},
        { content: `Hey! I'm trying to improve my game, would love to train with you for 2 hours now`, ifFrom: '0', idTo: '1', haveAvatar: true, timestamp: '1557497411'}
      ]
    }
  }

  setModalVisible(visible) {
    this.setState({isModalVisible: visible});
  }

  _renderMessage(item) {
    return (
      <View>
        <View style={ styles.messageItem }>
          <Text style={{ flex: 1}}>{item.content}</Text>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 10}}>14:02</Text>
          </View>
        </View>
        <Image
          style={[CommonStyles.smallCircleAvatar, { marginTop: 8 }]}
          source={require('../../assets/image/user.png')}
          />
      </View>
    );
  }

  _renderListMessage() {
    return (
      <View style={ styles.messagesContainer}>
        <FlatList
          keyExtractor={item => item.timestamp}
          data={this.state.messages}
          renderItem={ ({item}) => this._renderMessage(item) }
        />
      </View>
    );
  }

  _renderInputMessage() {
    return (
      <View style={{ height: 48, marginBottom: 8, marginHorizontal: 16 }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            style={{ borderColor: 'gray', borderWidth: 1, flex: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <View style={{width: 48, height: 48, marginLeft: 8, backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{ height: 32, width: 32, }}
                source={require('../../assets/image/send.png')}/>
            </View>
        </View>
      </View>
    );
  }

  _onReject = () => {
    this.setModalVisible(true);
  } 

  _renderAction() {
    return (
      <View style={{ marginTop: 32, alignItems: 'center', }}>
        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity
            style={{ paddingVertical: 8, paddingHorizontal: 16, backgroundColor: 'grey'}}>
            <Text>ACCEPT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ paddingVertical: 8, paddingHorizontal: 16, backgroundColor: 'grey'}}
            onPress={this._onReject}>
            <Text>REJECT</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 16, }}>
          <Text>Click on Accept to start talking, reject to pass</Text>
        </View>
      </View>
    );
  }

  renderModalContent = () => (
    <View style={styles.contentModal}>
      <Text style={styles.contentModalTitle}>Edit bounty terms</Text>
      <View>
        <Text>Session time</Text>
        <Text style={styles.contentModalTitle}>2 hr</Text>
      </View>
      <View>
        <Text>Price</Text>
        <Text style={styles.contentModalTitle}>$25.00/hr</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={[CommonStyles.buttonSubmit, { width: 150 }]}
          onPress={() => this.setModalVisible(false)} >
          <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[ CommonStyles.buttonSubmit, { width: 150 }]}
          onPress={() => this.setModalVisible(false)} >
          <Text>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  _renderHeader() {
    return (
      <View style={styles.header}>
        <View style={{ flex: 1, justifyContent: 'center'}}>
          <Text>
            Fortnite on PC
          </Text>
          <Text>
            30$/hr - 3 hours
          </Text>
        </View>
        <View>
          <Text>START</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={ styles.container}>
        {this._renderHeader()}
        <View style={{ flex: 1, }}>
          {this._renderListMessage()}
          {this.state.type === 'new-claim' ? this._renderAction() : null}
        </View>
        {this._renderInputMessage()}
        <Modal
          isVisible={this.state.isModalVisible}
          swipeDirection={['up', 'left', 'right', 'down']}
          style={styles.bottomModal}
        >
          {this.renderModalContent()}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#E0E0E0'
  },
  header: {
    flexDirection: 'row',
    height: 56,
    padding: 16,
    borderBottomWidth: 0.5,
  },
  messagesContainer: {
    marginHorizontal: 16,
  },
  messageItem: {
    marginTop: 16,
    padding: 16,
    backgroundColor: 'white'
  },
  smallAvatar: {
    width: 24,
    height: 24,
    marginTop: 8,
    borderRadius: 6
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  contentModal: {
    height: 400,
    padding: 22,
    borderRadius: 4,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  contentModalTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 12,
  },
})
