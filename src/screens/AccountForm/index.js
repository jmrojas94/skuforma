import React from 'react';
import {
    View,
    Text,
    Linking,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import {
  TextInput,
  Button,
} from 'react-native-paper';
import { connect } from 'react-redux';
import { createNewAccount } from '../../actions/accountActions';
import { Header } from '../../components/';
import { Styles } from './styles';


class AccountFormScreenComponent extends React.Component {
  state = {
    name: '',
    channel: '',
    retailer: '',
    region: '',
    storeNo: '',
    street: '',
    city: '',
    state: '',
    msa: '',
    contact: '',
    phone: '',
    email: '',
    memo: '',
  };

  handleSubmit() {
    let accountData = this.state;
    this.props.doCreateAccount(this.props.navigation, accountData);
  }
  
  render() {
    let {
      name,
      channel,
      retailer,
      region,
      storeNo,
      street,
      city,
      state,
      msa,
      contact,
      phone,
      email,
      memo,
    } = this.state;
    const { navigation } = this.props;
        return (
            <SafeAreaView style={Styles.container}>
                <Header showBack navigation={this.props.navigation} title="Add Account" />
                <ScrollView>
                    <TextInput
                      label='Name'
                      value={name}
                      onChangeText={ (name) => this.setState({ name }) }
                    />
                    <TextInput
                      label='Channel'
                      value={channel}
                      onChangeText={ (channel) => this.setState({ channel }) }
                    />
                    <TextInput
                      label='Retailer'
                      value={retailer}
                      onChangeText={ (retailer) => this.setState({ retailer }) }
                    />
                    <TextInput
                      label='Region'
                      value={region}
                      onChangeText={ (region) => this.setState({ region }) }
                    />
                    <TextInput
                      label='Store #'
                      value={storeNo}
                      onChangeText={ (storeNo) => this.setState({ storeNo }) }
                    />
                    <TextInput
                      label='Street'
                      value={street}
                      onChangeText={ (street) => this.setState({ street }) }
                    />
                    <TextInput
                      label='City'
                      value={city}
                      onChangeText={ (city) => this.setState({ city }) }
                    />
                    <TextInput
                      label='State'
                      value={state}
                      onChangeText={ (state) => this.setState({ state }) }
                    />
                    <TextInput
                      label='MSA'
                      value={msa}
                      onChangeText={ (msa) => this.setState({ msa }) }
                    />
                    <TextInput
                      label='Contact'
                      value={contact}
                      onChangeText={ (contact) => this.setState({ contact }) }
                    />
                    <TextInput
                      label='Phone'
                      value={phone}
                      onChangeText={ (phone) => this.setState({ phone }) }
                    />
                    <TextInput
                      label='Email'
                      value={email}
                      onChangeText={ (email) => this.setState({ email }) }
                    />
                    <TextInput
                      label='Memo'
                      value={memo}
                      onChangeText={ (memo) => this.setState({ memo }) }
                    />
                </ScrollView>
              <Button mode="contained" onPress={() => this.handleSubmit()}>
                Submit
              </Button>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  dispatch,
  doCreateAccount: (navigation, account) => dispatch(createNewAccount(navigation, account)),
});

const AccountFormScreen = connect(mapStateToProps, mapDispatchToProps)(AccountFormScreenComponent);

export { AccountFormScreen };
