import createReducer from '../createReducer';

const initialState = {

};

const dataLocal = createReducer(initialState, {
	['SEARCH_PHONE_OFFLINE'](state, action) {
		return { ...state, customerOffline: action.payload };
	},
});
export default dataLocal;
