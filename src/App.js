import React, { Component } from 'react';
import "antd/dist/antd.css";
import './App.css';
import rootReducer from "./reducers";
import {createStore} from "redux";
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";
import Auth from "./service/Auth";
import AppRoute from "./components/route/AppRoute";



const store = createStore(
    rootReducer,
);

class App extends Component {
  render() {
    Auth.loadUser();
    return (
        <Provider store={store}>
          <Router>
            <div id="root">
              <AppRoute/>
            </div>
          </Router>
        </Provider>

    );
  }
}

export default App;
