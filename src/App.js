import React, {Component} from 'react';
import "antd/dist/antd.css";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoute from "./components/routes/AppRoute";

class App extends Component {
    render() {
        return (
            <div>
                <AppRoute/>
            </div>

        );
    }
}

export default App;
