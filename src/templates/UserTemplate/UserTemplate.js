import React, { Fragment } from 'react'
import { Route } from 'react-router';
export default function UserTemplate(props) {
    const { Component, ...restRoute } = props;

    return <Route {...restRoute} render={(propsRoute) => {

        return <Fragment>

            <Component {...propsRoute} />


        </Fragment>
    }} />
}
