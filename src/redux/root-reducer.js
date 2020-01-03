import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import commonReducer from './common/common.reducer';
import homeReducer from './home/home.reducer';
import portfolioReducer from './portfolios/portfolios.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist : ['']
}

const rootReducer = combineReducers({
    common : commonReducer,
    home : homeReducer,
    portfolios : portfolioReducer
});

export default persistReducer(persistConfig, rootReducer);