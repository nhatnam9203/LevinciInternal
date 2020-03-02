import app from "./app";
import dataLocal from "./dataLocal";
import tabBottom from "./tabBottom"

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
const rootConfigPersist = {
    key: 'root',
    storage: AsyncStorage,
    blackList: ['app'],
    stateReconciler: autoMergeLevel2,
}
const rootReducer = combineReducers({
    app,
    dataLocal,
    tabBottom
})
// export default persistReducer(rootConfigPersist, rootReducer)
export default rootReducer;