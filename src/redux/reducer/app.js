import createReducer from '../createReducer';

const initialState = {
    testData : 'ohohohohohoho'
};

const app = createReducer(initialState, {
    ['TEST'](state, action) {
		return { ...state, testData: Math.random() };
	},
});

export default app;
