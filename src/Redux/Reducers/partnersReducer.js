import {typeAPI} from "../../API/api";

const SET_TYPE = "SET_TYPE";
const SET_PARTNERS = "SET_PARTNERS";
const SET_IS_LOADING = "SET_IS_LOADING";

let initialState = {
    types: [],
    partners: [],
    isLoading: false
};

const partnersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_TYPE:
            return {
                ...state, types: action.types
            }
        case SET_PARTNERS:
            return {
                ...state, partners: action.partners
            }
        case SET_IS_LOADING:
            return {
                ...state, isLoading: action.isLoading
            }
        default:
            return state;
    }
}

export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading});
export const setType = (types) => ({type: SET_TYPE, types});
export const setPartners = (partners) => ({type: SET_PARTNERS, partners});

export const requestType = () => {
    return async (dispatch) => {
        try {
            let types = await typeAPI.getType();
            dispatch(setType(types.data));
        } catch (e) {
            console.log(e)
        }
    }
}
export const requestPartners = (company, status) => {
    return async (dispatch) => {
        try {
            dispatch(setIsLoading(true));
            let partners = await typeAPI.getPartners(company, status);
            dispatch(setPartners(partners.data));
        } catch (e) {
            console.log(e.response.data.message)
        } finally {
            dispatch(setIsLoading(false));
        }
    }
}

export default partnersReducer;
