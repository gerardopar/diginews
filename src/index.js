// importing modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// importing components
import AppRouter from './routers/AppRouter';

// importing stylesheet
import './styles/styles.scss';

// redux store initialized
const store = configureStore();

// redux store provider
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
