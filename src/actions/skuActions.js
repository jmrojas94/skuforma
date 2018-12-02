import axios from 'axios';
import {
  GET_SKUS_REQUEST,
  GET_SKUS_SUCCESS,
  GET_SKUS_FAILURE,
  CREATE_NEW_SKU_REQUEST,
  CREATE_NEW_SKU_SUCCESS,
  CREATE_NEW_SKU_FAILURE,
  UPDATE_SKU_REQUEST,
  UPDATE_SKU_SUCCESS,
  UPDATE_SKU_FAILURE,
  DELETE_SKU_REQUEST,
  DELETE_SKU_SUCCESS,
  DELETE_SKU_FAILURE,
  CHOOSE_SKU_SUCCESS,
} from './types';

// Get all skus
const getSKUsRequest = () => ({ type: GET_SKUS_REQUEST });

const getSKUsSuccess = data => ({
    type: GET_SKUS_SUCCESS,
    skus: data,
});

const getSKUsFailure = error => ({
    type: GET_SKUS_FAILURE,
    error: error,
});

const getSKUs = () => (dispatch) => {
    dispatch(getSKUsRequest());
    let skuListData = [
      {
        name: 'Lol Popcorn',
        upc: '000000000',
        itemNo: '12',
        category: 'Snacks',
        subcategory: 'Popcorn',
        segment: 'Bagged Popcorn',
        brand: 'Someone',
        type: 'White Cheddar',
        size: '16',
        metric: 'oz',
        itemCase: '1234',
        memo: 'lol',
      },
      {
        name: 'Lol Chips',
        upc: '000000001',
        itemNo: '12',
        category: 'Snacks',
        subcategory: 'Chips',
        segment: 'Bagged Chips',
        brand: 'Someone',
        type: 'White Cheddar',
        size: '16',
        metric: 'oz',
        itemCase: '1234',
        memo: 'lol',
      }
    ]
    dispatch(getSKUsSuccess(skuListData));
};

// Create a new SKU
const createNewSKURequest = () => ({ type: CREATE_NEW_SKU_REQUEST });

const createNewSKUSuccess = data => ({
    type: CREATE_NEW_SKU_SUCCESS,
    sku: data,
});

const createNewSKUFailure = error => ({
    type: CREATE_NEW_SKU_FAILURE,
    error: error,
});

const createNewSKU = (navigation, skuData) => (dispatch) => {
    dispatch(createNewSKURequest());

    
    dispatch(createNewSKUSuccess(skuData));
    navigation.navigate('SKU');
};

// Update an SKU
const updateSKURequest = () => ({ type: UPDATE_SKU_REQUEST });

const updateSKUSuccess = data => ({
    type: UPDATE_SKU_SUCCESS,
    sku: data.data,
});

const updateSKUFailure = error => ({
    type: UPDATE_SKU_FAILURE,
    error: error,
});

const updateSKU = sku => (dispatch) => {
    dispatch(updateSKURequest());
    dispatch(updateSKUSuccess(sku));
};

const chooseSKUSuccess = currentSKU => ({
    type: CHOOSE_SKU_SUCCESS,
    currentSKU: currentSKU,
});

const chooseSKU = currentSKU => (dispatch) => {
    // dispatch(getSKUsRequest());
    dispatch(chooseSKUSuccess(currentSKU));
};

// Delete a sku
const deleteSKURequest = () => ({ type: DELETE_SKU_REQUEST });

const deleteSKUSuccess = data => ({
    type: DELETE_SKU_SUCCESS,
    sku: data,
});

const deleteSKUFailure = error => ({
    type: DELETE_SKU_FAILURE,
    error: error,
});

const deleteSKU = (id) => (dispatch) => {
    dispatch(deleteSKURequest());
    dispatch(deleteSKUSuccess(id));
};

export {
    getSKUs,
    chooseSKU,
    createNewSKU,
    deleteSKU,
    updateSKU,
};
