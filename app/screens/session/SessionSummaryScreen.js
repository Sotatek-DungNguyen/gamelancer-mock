import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import HeaderComp from './HeaderComp';
import Modal from "react-native-modal";

export default class SessionSummaryScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      isModalVisible: false,
      prices: [5, 10, 25]
    }
  }

  _renderHeader() {
    return (
      <HeaderComp
        avatar={require('../../assets/image/user.png')}
        isTip={false}
        onTipPress={ () => {
          this.setModalVisible(true);
        }}
        />
    );
  }

  _renderBody() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <View style={{ padding: 20 }}>
          <Text style={ styles.textSection }>Time Played</Text>
          <View style={{  marginTop: 20, flexDirection: 'row' }}>
            <Text style={ [ styles.textValue, { flex: 1 } ]}>2:48:12</Text>
            <Text style={ styles.textValue }>$120</Text>
           </View>
          <View style={{  marginTop: 20, flexDirection: 'row'}}>
            <Text style={ [styles.textSection, { flex: 1 }] }>Tips</Text>
            <Text style={ styles.textValue }>$45</Text>
          </View>
          <View style={{ marginTop: 20, height: 1, backgroundColor: 'grey'}}></View>
          <View style={{ marginTop: 20, flexDirection: 'row'}}>
            <Text style={ [styles.textSection, { flex: 1 }] }>Total</Text>
            <Text style={ styles.textValue }>$165</Text>
          </View>
        </View>
        <TouchableOpacity style={ styles.buttonNext }>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={ styles.container}>
        {this._renderHeader()}
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
  textSection: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#344955',
  },
  textValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonNext: {
    paddingVertical: 20,
    marginHorizontal: 16,
    backgroundColor: 'grey',
    alignItems: 'center',
  }
})
