import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Navigator from './app/main/Navigator';
import { YellowBox } from 'react-native';

// YellowBox.ignoreWarnings(['Warning: ...']);

console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => Navigator);

// adb shell input keyevent 82
