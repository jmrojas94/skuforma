import { combineReducers } from 'redux';
import { accountReducer } from './account';
import { skuReducer } from './sku';


const Reducer = combineReducers({
    account: accountReducer,
    sku: skuReducer,
});


export { Reducer };
