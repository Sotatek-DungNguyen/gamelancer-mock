import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, TabBar } from '@ant-design/react-native';

export default class MainScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'BountyList',
    };
  }

  renderContent(pageText) {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    );
  }

  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    });
  }

  render() {
    return (
      <TabBar
        styles={{ flex: 1 }}
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#f5f5f5"
        >
        <TabBar.Item
          icon={<Icon name="home" />}
          selected={this.state.selectedTab === 'BountyList'}
          onPress={() => this.onChangeTab('BountyList')}
          style={{ justifyContent: 'center'}}
        >
          {this.renderContent('BountyList')}
        </TabBar.Item>

        <TabBar.Item
          icon={<Icon name="ordered-list" />}
          selected={this.state.selectedTab === 'GamelancerLadder'}
          onPress={() => this.onChangeTab('GamelancerLadder')}
        >
          {this.renderContent('GamelancerLadder')}
        </TabBar.Item>

        <TabBar.Item
          icon={<Icon name="message" />}
          badge={2}
          selected={this.state.selectedTab === 'Chats'}
          onPress={() => this.onChangeTab('Chats')}
        >
          {this.renderContent('Chats')}
        </TabBar.Item>
        
        <TabBar.Item
          icon={<Icon name="user" />}
          selected={this.state.selectedTab === 'User'}
          onPress={() => this.onChangeTab('User')}
        >
          {this.renderContent('User')}
        </TabBar.Item>
      </TabBar>
    );
  }
}