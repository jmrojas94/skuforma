import React from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-paper';
import { getSKUs } from '../../actions/skuActions';
import { getAccounts } from '../../actions/accountActions';
import { Header } from '../../components/';
import { Styles } from './styles';


class HomeScreenComponent extends React.Component {
  componentWillMount() {
    this.props.doGetSKUs();
    this.props.doGetAccounts();
  }

  render() {
    const { navigation } = this.props;
        return (
            <SafeAreaView style={Styles.container}>
                <Header showMenu showSearch showBack={false} navigation={this.props.navigation} title="Home" />
                <ScrollView style={Styles.homeMenu}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('SKU')}
                      mode="contained"
                      style={Styles.menuButton}
                    >
                      <Text style={Styles.menuButtonText}>Survey</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('SKU')}
                      mode="contained"
                      style={Styles.menuButton}
                    >
                      <Text style={Styles.menuButtonText}>SKU</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Account')}
                      mode="contained"
                      style={Styles.menuButton}
                    >
                      <Text style={Styles.menuButtonText}>Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('SKU')}
                      mode="contained"
                      style={Styles.menuButton}
                    >
                      <Text style={Styles.menuButtonText}>Advert</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
    dispatch,
    doGetSKUs: () => dispatch(getSKUs()),
    doGetAccounts: () => dispatch(getAccounts()),
});

const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreenComponent);

export { HomeScreen };
