import { AppRegistry } from 'react-native';
import { SkuForma } from './src/SkuForma';


AppRegistry.registerComponent('SkuForma', () => SkuForma);

console.disableYellowBox = true;

console.pretty = obj => {
    console.log(JSON.stringify(obj, 2, null))
};
