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
} from '../actions/types';


const initialState = {
    accounts: [],
    error: null,
    success: false,
    loading: true,
    creating: false,
    currentAccount: null,
    saving: false,
};

const accountReducer =
    (state = initialState, action) => {
        switch (action.type) {
        case GET_ACCOUNTS_SUCCESS:
            return {
                ...state,
                accounts: action.accounts,
                currentAccount: action.accounts[0],
                success: true,
                loading: false,
            };

        case GET_ACCOUNTS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GET_ACCOUNTS_FAILURE:
            return {
                ...state,
                accounts: [],
                error: action.error,
                success: false,
                loading: false,
            };

        case CREATE_NEW_ACCOUNT_SUCCESS:
            return {
                ...state,
                currentAccount: action.currentAccount,
                accounts: [...state.accounts, action.account],
                success: true,
                creating: false,
            };

        case CREATE_NEW_ACCOUNT_REQUEST:
            return {
                ...state,
                creating: true,
            };

        case CREATE_NEW_ACCOUNT_FAILURE:
            return {
                ...state,
                error: action.error,
                success: false,
                creating: false,
            };

        case UPDATE_ACCOUNT_SUCCESS:
            return {
                ...state,
                currentAccount: action.account,
                accounts: state.accounts.map(account => {
                    if (account.id === action.account.id) {
                        return action.account;
                    }
                    return account;
                }),
                success: true,
                loading: false,
            };

        case UPDATE_ACCOUNT_REQUEST:
            return {
                ...state,
                saving: true,
            };

        case UPDATE_ACCOUNT_FAILURE:
            return {
                ...state,
                error: action.error,
                success: false,
                saving: false,
            };

        case CHOOSE_ACCOUNT_SUCCESS:
            return {
                ...state,
                success: true,
                saving: false,
                currentAccount: action.currentAccount,
            };

        case DELETE_ACCOUNT_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false,
            };

        case DELETE_ACCOUNT_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case DELETE_ACCOUNT_FAILURE:
            return {
                ...state,
                error: action.error,
                success: false,
                loading: false,
            };

        default:
            return state;
        }
    };

export { accountReducer };
