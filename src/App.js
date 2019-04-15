import React, {Component} from 'react';
import "antd/dist/antd.css";
import './App.css';
import {Provider} from 'react-redux';
import store from "./store";
import jwt_decode from 'jwt-decode';
import {logoutUser, setCurrentUser} from './actions/Auth';

import 'bootstrap/dist/css/bootstrap.min.css';
import setAuthToken from "./service/setAuthToken";
import AppRoute from "./components/routes/AppRoute";

if(localStorage.jwtToken) {
    setAuthToken(
        localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = '/login'
    }
}

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <AppRoute/>
        </Provider>

    );
  }
}

export default App;
