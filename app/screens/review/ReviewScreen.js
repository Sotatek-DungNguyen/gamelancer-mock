import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback,
  Dimensions } from 'react-native';
import { Rating } from 'react-native-elements';
import { CommonStyles } from '../../utils/CommonStyles';

const { width } = Dimensions.get('window');
export default class ReviewScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      rating: 0,
      tips: [
        { isSelected: false, value: 5 },
        { isSelected: false, value: 15 },
        { isSelected: false, value: 50 }
      ]
    }
  }

  _ratingCompleted = (rating) => {
    this.setState({
      rating: rating,
    });
  }

  _onSelectTip = (index) => {
    const newTips = this.state.tips.map((item, i) => {
      if( index === i ) {
        isSelected = !item.isSelected
      } else {
        isSelected = false;
      }
      return ({
        isSelected: isSelected,
        value: item.value
      });
    });
    this.setState({
      tips: newTips,
    });
  }

  _renderHeader() {
    return (
      <View style={styles.header}>
        <Image
          style={{ height: 256, position: 'absolute' }}
          resizeMode='stretch'
          />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', }}>
          <Image style={{ width: 56, height: 56, borderRadius: 28}}
            source={require('../../assets/image/user.png')}
            />
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black'}}>Gamerlancer</Text>
          <Rating
            type='star'
            ratingCount={5}
            imageSize={24}
            onFinishRating={this._ratingCompleted}/>
          <TouchableOpacity style={{ paddingVertical: 6, paddingHorizontal: 16, backgroundColor: '#E0E0E0'}}
            onPress={ () => {

            }}>
            <Text style={{ fontSize: 12, color: 'black'}}>{'give a compliment'.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 1, backgroundColor: 'black'}}/>
      </View>
    );
  }

  _renderMainContent() {
    console.log('==============================================');
    console.log(this.state.tips);
    console.log('==============================================');
    return (
      <View style={{ alignItems: 'center', marginTop: 32}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#424242'}}>Add a tip for</Text>
        <Text>The session was 3h @ $24,12</Text>
        <View style={{ width: width, marginTop: 16, flexDirection: 'row', justifyContent: 'space-around', }}>
          {this.state.tips.map((item, index) => {
            return (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => {
                  this._onSelectTip(index)
                }}>
                <View
                  style={{ width: 56, height: 56, backgroundColor: !item.isSelected ? '#EEEEEE' : 'grey', borderRadius: 28, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black'}}>{`$${item.value}`}</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
        <Text style={{ marginTop: 32}}>Enter custom amount</Text>
        <TouchableOpacity style={[ CommonStyles.buttonSubmit, { marginTop: 32, paddingHorizontal: 156 }]}>
          <Text style={{ fontSize: 16}}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[ CommonStyles.buttonSubmit, { marginTop: 16, paddingHorizontal: 156 }]}>
          <Text style={{ fontSize: 16}}>Skip</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderHeader()}
        {this._renderMainContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 256,
  },
})
