import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback,
  Dimensions } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';

const { width, height } = Dimensions.get('window');
export default class ReviewScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      rating: null,
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
        <View style={{ flex: 1, backgroundColor: '#9E9E9E', alignItems: 'center', justifyContent: 'space-evenly', }}>
          <Image
            style={{ height: 208, position: 'absolute' }}
            resizeMode='stretch'
            />
          <Image style={{ width: 56, height: 56, backgroundColor: 'grey', borderRadius: 28}}
            />
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black'}}>gamelancerusername</Text>
          <Rating
            type='star'
            ratingCount={5}
            imageSize={24}
            onFinishRating={this._ratingCompleted}/>
          <TouchableOpacity style={{ paddingVertical: 6, paddingHorizontal: 16, backgroundColor: 'grey'}}
            onPress={ () => {

            }}>
            <Text>{'give a compliment'.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _renderBody() {
    console.log('==============================================');
    console.log(this.state.tips);
    console.log('==============================================');
    return (
      <View style={{ alignItems: 'center', marginTop: 48}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black'}}>Add a tip for</Text>
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
                  <Text style={{ color: 'black'}}>{`$${item.value}`}</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
        <Text style={{ marginTop: 32}}>Enter custom amount</Text>
        <TouchableOpacity style={{ marginTop: 36, paddingHorizontal: 156, paddingVertical: 20, backgroundColor: '#EEEEEE' }}>
          <Text>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 8, paddingHorizontal: 156, paddingVertical: 20, backgroundColor: '#EEEEEE' }}>
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderHeader()}
        {this._renderBody()}
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
