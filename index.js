/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import MainScreen from './app/screens/main/MainScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainScreen);
