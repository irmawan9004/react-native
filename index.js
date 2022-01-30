/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Welcome from './src/pages/Welcome';
import Profilku from './src/pages/Profilku';

AppRegistry.registerComponent(appName, () => Welcome);
