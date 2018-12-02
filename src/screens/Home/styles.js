import { StyleSheet } from 'react-native';
import { DEVICE, EDITOR, COLORS } from '../../config';


const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    homeMenu: {
      // height: '100%',
      // paddingTop: 30
    },
    menuButton: {
      marginTop: 30,
      marginLeft: 25,
      marginRight: 25,
      height: 100,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#6200EE',
      borderRadius: 5,
    },
    menuButtonText: {
      textAlign: 'center',
      color: 'white',
    }
});

export { Styles };
