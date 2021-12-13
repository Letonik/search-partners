export const getTypesSelector = (state) => {
    return state.partners.types;
}
export const getPartnerSelector = (state) => {
    return state.partners.partners;
}
export const getIsLoading = (state) => {
    return state.partners.isLoading;
}