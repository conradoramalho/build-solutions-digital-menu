import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './app/main/App';
import { YellowBox } from 'react-native';

// YellowBox.ignoreWarnings(['Warning: ...']);

console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);

// adb shell input keyevent 82
