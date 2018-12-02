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
import { createNewSKU } from '../../actions/skuActions';
import { Header } from '../../components/';
import { Styles } from './styles';


class SKUFormScreenComponent extends React.Component {
  state = {
    name: '',
    upc: '',
    itemNo: '',
    category: '',
    subcategory: '',
    segment: '',
    brand: '',
    type: '',
    size: '',
    metric: '',
    itemCase: '',
    memo: '',
  };

  handleSubmit() {
    let skuData = this.state;
    this.props.doCreateSKU(this.props.navigation, skuData);
  }
  
  render() {
    let {
      name,
      upc,
      itemNo,
      category,
      subcategory,
      segment,
      brand,
      type,
      size,
      metric,
      itemCase,
      memo,
    } = this.state;
    const { navigation } = this.props;
        return (
            <SafeAreaView style={Styles.container}>
                <Header showBack navigation={this.props.navigation} title="Add SKU" />
                <ScrollView>
                    <TextInput
                      label='Name'
                      value={name}
                      onChangeText={ (name) => this.setState({ name }) }
                    />
                    <TextInput
                      label='UPC'
                      value={upc}
                      onChangeText={ (upc) => this.setState({ upc }) }
                    />
                    <TextInput
                      label='Item #'
                      value={itemNo}
                      onChangeText={ (itemNo) => this.setState({ itemNo }) }
                    />
                    <TextInput
                      label='Category'
                      value={category}
                      onChangeText={ (category) => this.setState({ category }) }
                    />
                    <TextInput
                      label='Subcategory'
                      value={subcategory}
                      onChangeText={ (subcategory) => this.setState({ subcategory }) }
                    />
                    <TextInput
                      label='Segment'
                      value={segment}
                      onChangeText={ (segment) => this.setState({ segment }) }
                    />
                    <TextInput
                      label='Brand'
                      value={brand}
                      onChangeText={ (brand) => this.setState({ brand }) }
                    />
                    <TextInput
                      label='Type'
                      value={type}
                      onChangeText={ (type) => this.setState({ type }) }
                    />
                    <TextInput
                      label='Size'
                      value={size}
                      onChangeText={ (size) => this.setState({ size }) }
                    />
                    <TextInput
                      label='Metric'
                      value={metric}
                      onChangeText={ (metric) => this.setState({ metric }) }
                    />
                    <TextInput
                      label='Case'
                      value={itemCase}
                      onChangeText={ (itemCase) => this.setState({ itemCase }) }
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
  doCreateSKU: (navigation, sku) => dispatch(createNewSKU(navigation, sku)),
});

const SKUFormScreen = connect(mapStateToProps, mapDispatchToProps)(SKUFormScreenComponent);

export { SKUFormScreen };
