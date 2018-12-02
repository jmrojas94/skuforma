import React from 'react';
import {
    View,
    Text,
    Linking,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Button,
} from 'react-native';
import {
  List,
  Divider,
} from 'react-native-paper';
import { connect } from 'react-redux';
import { Header } from '../../components/';
import { Styles } from './styles';


class AccountScreenComponent extends React.Component {
  render() {
    console.log(this.props)
    const { navigation, accounts } = this.props;
        return (
            <SafeAreaView style={Styles.container}>
                <Header showMenu showAccountAdd showBack showSearch navigation={this.props.navigation} title="Account" />
                <ScrollView>
                  {
                    accounts.length ?
                      accounts.map((account, i) => {
                        return(
                          <View key={i}>
                            <List.Item
                              title={account.name}
                              description={'Channel: ' + account.channel}
                              right={props => <List.Icon {...props} icon="clear" />}
                            />
                            <Divider />
                          </View>)
                      })
                      : <Text>No Accounts found.</Text>
                  }
                  
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps =
    state => ({
        accounts: state.account.accounts,
    });

const mapDispatchToProps = null;

const AccountScreen = connect(mapStateToProps, mapDispatchToProps)(AccountScreenComponent);

export { AccountScreen };
