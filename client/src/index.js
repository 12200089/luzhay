import React from "react";
import ReactDom from 'react-dom';
import App from './app/App';
import './index.scss';
import {createStore,applyMiddleware} from "redux";
import reducers from "./reducers/reducer";
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from "redux-thunk";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const store = createStore(
    reducers,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDom.render(
    <Provider store={store}>
        <App/>
        <ToastContainer/>
    </Provider>,
    document.getElementById('root')
);
