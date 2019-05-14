import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CommonStyles, CommonColors } from '../../utils/CommonStyles';

export default class PayScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      price: 56,
      pays: [
        { isSelected: true, type: 'Gamelancer funds ($0)' },
        { isSelected: false, type: 'Paypal' },
        { isSelected: false, type: 'Credit Card' }
      ]
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.payView }>
        <View style={ styles.titleContainer}>
          <Text style={ styles.textTitle}>Time extension</Text>
        </View>
        <View style={{ height: 0.5, backgroundColor: 'black'}}></View>
        <View style={ styles.groupPayMethods }>
          {this.state.pays.map((item, index) => {
            return (
              <Text 
                key={index}
                style={{ marginTop: 16 }}>{item.type}</Text>
            );
          })}
        </View>
        <View style={{ paddingHorizontal: 56, marginTop: 16}}>
          <TextInput
            style={{  height: 48, borderWidth: 1, borderRadius: 5, borderColor: 'gray',}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <TextInput
            style={{ height: 48, marginTop: 16, borderWidth: 1, borderRadius: 5, borderColor: 'gray',}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
        <TouchableOpacity style={[CommonStyles.buttonSubmit, { marginTop: 32 } ]}>
          <Text style={{ fontSize: 16}}>{`Pay $${this.state.price}`}</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0'
  },
  payView: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 112,
    backgroundColor: 'white'
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: CommonColors.grey900
  },
  titleContainer: {
    paddingHorizontal: 32,
    paddingVertical: 20
  },
  groupPayMethods: {
    marginLeft: 32,
    marginTop: 20 
  }
})
