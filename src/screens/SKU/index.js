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


class SKUScreenComponent extends React.Component {
  render() {
    console.log(this.props)
    const { navigation, skus } = this.props;
        return (
            <SafeAreaView style={Styles.container}>
                <Header showMenu showSKUAdd showBack showSearch navigation={this.props.navigation} title="SKU" />
                <ScrollView>
                  {
                    skus.length ?
                      skus.map((sku, i) => {
                        return(
                          <View key={i}>
                            <List.Item
                              title={sku.name}
                              description={'UPC: ' + sku.upc}
                              right={props => <List.Icon {...props} icon="clear" />}
                            />
                            <Divider />
                          </View>)
                      })
                      : <Text>No SKUs found.</Text>
                  }
                  
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps =
    state => ({
        skus: state.sku.skus,
    });

const mapDispatchToProps = null;

const SKUScreen = connect(mapStateToProps, mapDispatchToProps)(SKUScreenComponent);

export { SKUScreen };
