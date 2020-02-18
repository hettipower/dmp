import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import commonReducer from './common/common.reducer';
import homeReducer from './home/home.reducer';
import portfolioReducer from './portfolios/portfolios.reducer';
import blogReducer from './blog/blog.reducer';
import serviceReducer from './services/services.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist : ['blogReducer']
}

const rootReducer = combineReducers({
    common : commonReducer,
    home : homeReducer,
    portfolios : portfolioReducer,
    blog : blogReducer,
    services : serviceReducer
});

export default persistReducer(persistConfig, rootReducer);