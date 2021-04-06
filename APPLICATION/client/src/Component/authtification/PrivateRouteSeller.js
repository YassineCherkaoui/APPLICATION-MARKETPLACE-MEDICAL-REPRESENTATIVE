import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./helpsAdmin";
// ______________ Check If authentified________________________
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        push: "/Seller"
                    }}
                />
            )
        }
    />
);

export default PrivateRoute;