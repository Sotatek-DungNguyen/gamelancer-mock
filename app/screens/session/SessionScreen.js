import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput, TouchableOpacity,
  Dimensions } from 'react-native';
import HeaderComp from './HeaderComp';
import Modal from "react-native-modal";

const { width, height } = Dimensions.get('window');
export default class SessionScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      isModalVisible: false,
      prices: [5, 10, 25]
    }
  }

  setModalVisible(visible) {
    this.setState({isModalVisible: visible});
  }

  renderModalContent = () => (
    <View style={styles.contentModal}>
      <View style = {{ flexDirection: 'row', flex: 1, }}>
        {this.state.prices.map((item, index) => {
          return (
            <View key={index} style={{ flex: 1, height: 40, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{ color: 'black'}}>{`$${item}`}</Text>
            </View>
          );
        })}
        <View style={{ borderWidth: 0.5, flex: 1, height: 40, alignItems: 'center', justifyContent: 'center' }}>
          <Text>$0.0</Text>
        </View>
      </View >
      <View style={{ alignItems: 'center', justifyContent: 'center', }}>
        <TouchableOpacity style={{ width: 170, height: 32, alignItems: 'center', justifyContent: 'center', borderWidth: 0.5}}
          onPress={ () => {
            this.setModalVisible(false)
          }}>
          <Text style={{ color: 'black'}}>
            {'Confirm'.toUpperCase()}
          </Text>
        </TouchableOpacity>
      </View>
    </View>

  );

  _renderHeader() {
    return (
      <HeaderComp
        avatar={require('../../assets/image/user.png')}
        isTip={true}
        onTipPress={ () => {
          this.setModalVisible(true);
        }}
        />
    );
  }

  _renderBody() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', }}>
        <View style={{ alignItems: 'center'}}>
          <Text >Time left</Text>
          <Text style={{ fontSize: 56, fontWeight: 'bold', color: 'black'}}>2:48:12</Text>
        </View>
        <View style={{ width: 200, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
          <TouchableOpacity>
            <Image 
              source={require('../../assets/image/stop.png')}/>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={ ()=> {
            this.setModalVisible(true);
          }}>
            <Image 
                source={require('../../assets/image/add.png')}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={ styles.container}>
        {this._renderHeader()}
        <Modal
          isVisible={this.state.isModalVisible}
          swipeDirection={['up', 'left', 'right', 'down']}
        >
          {this.renderModalContent()}
        </Modal>
        {this._renderBody()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0'
  },
  header: {
    height: 208,
  },
  contentModal: {
    height: 140,
    padding: 22,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  contentModalTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 12,
  },
})
