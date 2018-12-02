import axios from 'axios';
import {
  GET_ACCOUNTS_REQUEST,
  GET_ACCOUNTS_SUCCESS,
  GET_ACCOUNTS_FAILURE,
  CREATE_NEW_ACCOUNT_REQUEST,
  CREATE_NEW_ACCOUNT_SUCCESS,
  CREATE_NEW_ACCOUNT_FAILURE,
  UPDATE_ACCOUNT_REQUEST,
  UPDATE_ACCOUNT_SUCCESS,
  UPDATE_ACCOUNT_FAILURE,
  DELETE_ACCOUNT_REQUEST,
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_FAILURE,
  CHOOSE_ACCOUNT_SUCCESS,
} from './types';

// Get all accounts
const getAccountsRequest = () => ({ type: GET_ACCOUNTS_REQUEST });

const getAccountsSuccess = data => ({
    type: GET_ACCOUNTS_SUCCESS,
    accounts: data,
});

const getAccountsFailure = error => ({
    type: GET_ACCOUNTS_FAILURE,
    error: error,
});

const getAccounts = () => (dispatch) => {
    dispatch(getAccountsRequest());
    let accountListData = [
      {
        name: 'Something',
        channel: 'Else',
        retailer: 'Walmart',
        region: 'South',
        storeNo: '5123',
        street: '123 S 1st St',
        city: 'Austin',
        state: 'Tx',
        msa: '09',
        contact: 'Joe',
        phone: '888-888-8888',
        email: 'joe@something.com',
        memo: 'Dunno',
      },
    ]
    dispatch(getAccountsSuccess(accountListData));
};

// Create a new Account
const createNewAccountRequest = () => ({ type: CREATE_NEW_ACCOUNT_REQUEST });

const createNewAccountSuccess = data => ({
    type: CREATE_NEW_ACCOUNT_SUCCESS,
    account: data,
});

const createNewAccountFailure = error => ({
    type: CREATE_NEW_ACCOUNT_FAILURE,
    error: error,
});

const createNewAccount = (navigation, accountData) => (dispatch) => {
    dispatch(createNewAccountRequest());

    
    dispatch(createNewAccountSuccess(accountData));
    navigation.navigate('Account');
};

// Update an Account
const updateAccountRequest = () => ({ type: UPDATE_ACCOUNT_REQUEST });

const updateAccountSuccess = data => ({
    type: UPDATE_ACCOUNT_SUCCESS,
    account: data.data,
});

const updateAccountFailure = error => ({
    type: UPDATE_ACCOUNT_FAILURE,
    error: error,
});

const updateAccount = account => (dispatch) => {
    dispatch(updateAccountRequest());
    dispatch(updateAccountSuccess(account));
};

const chooseAccountSuccess = currentAccount => ({
    type: CHOOSE_ACCOUNT_SUCCESS,
    currentAccount: currentAccount,
});

const chooseAccount = currentAccount => (dispatch) => {
    // dispatch(getAccountsRequest());
    dispatch(chooseAccountSuccess(currentAccount));
};

// Delete a account
const deleteAccountRequest = () => ({ type: DELETE_ACCOUNT_REQUEST });

const deleteAccountSuccess = data => ({
    type: DELETE_ACCOUNT_SUCCESS,
    account: data,
});

const deleteAccountFailure = error => ({
    type: DELETE_ACCOUNT_FAILURE,
    error: error,
});

const deleteAccount = (id) => (dispatch) => {
    dispatch(deleteAccountRequest());
    dispatch(deleteAccountSuccess(id));
};

export {
    getAccounts,
    chooseAccount,
    createNewAccount,
    deleteAccount,
    updateAccount,
};
