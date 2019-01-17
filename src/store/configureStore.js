import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import newsReducer from '../reducers/newsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//creating the redux store: 
export default () => {
    const store = createStore (combineReducers({
        news: newsReducer,
      }),
      
      composeEnhancers(applyMiddleware(thunk))
    );

    return store;
  };