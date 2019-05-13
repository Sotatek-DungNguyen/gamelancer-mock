/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import MainScreen from './app/screens/main/MainScreen';
import BountyListScreen from './app/screens/bountyList/BountyListScreen';
import ChatsScreen from './app/screens/chats/ChatsScreen';
import ChatDetailScreen from './app/screens/chats/ChatDetailScreen';
import SessionScreen from './app/screens/session/SessionScreen';
import ReviewScreen from './app/screens/review/ReviewScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ReviewScreen);
