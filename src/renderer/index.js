import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers';

const store = configureStore();
const rootEl = document.getElementById('root');

ReactDom.render(
<Provider store={store}>
    <App />
    </Provider>,
    rootEl
);