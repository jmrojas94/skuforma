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
} from '../actions/types';


const initialState = {
    skus: [],
    error: null,
    success: false,
    loading: true,
    creating: false,
    currentSKU: null,
    saving: false,
};

const skuReducer =
    (state = initialState, action) => {
        switch (action.type) {
        case GET_SKUS_SUCCESS:
            return {
                ...state,
                skus: action.skus,
                currentSKU: action.skus[0],
                success: true,
                loading: false,
            };

        case GET_SKUS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GET_SKUS_FAILURE:
            return {
                ...state,
                skus: [],
                error: action.error,
                success: false,
                loading: false,
            };

        case CREATE_NEW_SKU_SUCCESS:
            return {
                ...state,
                currentSKU: action.currentSKU,
                skus: [...state.skus, action.sku],
                success: true,
                creating: false,
            };

        case CREATE_NEW_SKU_REQUEST:
            return {
                ...state,
                creating: true,
            };

        case CREATE_NEW_SKU_FAILURE:
            return {
                ...state,
                error: action.error,
                success: false,
                creating: false,
            };

        case UPDATE_SKU_SUCCESS:
            return {
                ...state,
                currentSKU: action.sku,
                skus: state.skus.map(sku => {
                    if (sku.id === action.sku.id) {
                        return action.sku;
                    }
                    return sku;
                }),
                success: true,
                loading: false,
            };

        case UPDATE_SKU_REQUEST:
            return {
                ...state,
                saving: true,
            };

        case UPDATE_SKU_FAILURE:
            return {
                ...state,
                error: action.error,
                success: false,
                saving: false,
            };

        case CHOOSE_SKU_SUCCESS:
            return {
                ...state,
                success: true,
                saving: false,
                currentSKU: action.currentSKU,
            };

        case DELETE_SKU_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false,
            };

        case DELETE_SKU_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case DELETE_SKU_FAILURE:
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

export { skuReducer };
