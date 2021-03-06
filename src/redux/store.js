import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore} from 'redux-persist';

import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
		})
		: compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
export const persistor = persistStore(store);

export default store;