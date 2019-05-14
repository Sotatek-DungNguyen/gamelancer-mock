import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,
  Dimensions } from 'react-native';
  import { CommonStyles } from '../../utils/CommonStyles';

const { width } = Dimensions.get('window');
export default class HeaderComp extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { thumb, avatar, isTip, onTipPress } = this.props
    return (
      <View style={styles.header}>
        <View style={{ flex: 1, backgroundColor: '#9E9E9E', alignItems: 'center', justifyContent: 'center', }}>
          <Image
            style={{ height: 208, position: 'absolute' }}
            resizeMode='stretch'
            source={thumb}
            />
          <Image style={ CommonStyles.bigCircleAvatar }
            source={avatar}/>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black'}}>gamelancerusername</Text>
        </View>
        {isTip ? (
          <TouchableOpacity style={{ position: 'absolute', marginTop: 208 - 16, marginLeft: width/2-48, width: 96, height: 32, borderWidth: 0.5, justifyContent: 'center', alignItems: 'center'}}
            onPress={ onTipPress }>
            <Text>TIP</Text>
          </TouchableOpacity>
          ): null }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 208,
  },
})
