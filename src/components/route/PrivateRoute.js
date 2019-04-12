import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import AppURL from "./AppUrl";
import Auth from "../../service/Auth";


export const PrivateRoute = ({component: Component, props, ...rest}) => {
    return (
        <Route {...rest} render={p => (
            Auth.getUser()
                ? <Component {...p} {...props} />
                : <Redirect to={{pathname: AppURL.login(), state: {from: p.location}}}/>
        )}/>
    );
};
