import React from 'react';
import {
    Linking,
    StatusBar,
    View,
    Animated,
    Easing,
} from 'react-native';
import {
    DrawerNavigator,
    createStackNavigator,
    TabNavigator,
    addNavigationHelpers,
    createAppContainer,
} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {
    AccountScreen,
    AccountFormScreen,
    HomeScreen,
    SKUScreen,
    SKUFormScreen,
} from './screens';

const MainNavigation = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        SKU: {
          screen: SKUScreen,
        },
        SKUForm: {
          screen: SKUFormScreen,
        },
        Account: {
          screen: AccountScreen,
        },
        AccountForm: {
          screen: AccountFormScreen,
        },
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
        navigationOptions: {
            gesturesEnabled: false,
        },
    }
);

const AppContainer = createAppContainer(MainNavigation);

class AppNavigation extends React.Component {
    render() {
            return (
                <View style={{ flex: 1 }}>
                    <AppContainer />
                </View>
            );
    }
}

export { AppNavigation };
