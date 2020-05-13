import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';


// Basically, replaces Route but denies access to some pages
export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
        <Route {...rest} component={(props) => (
            !isAuthenticated ? (
                <LoginPage />
            ) : (
                <div>
                    <Header />
                    <Component {...props} />
                </div>
                )
        )} />
    );

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);

// Andrew's version: 

// import React from 'react';
// import { connect } from 'react-redux';
// import { Route, Redirect } from 'react-router-dom';

// export const PublicRoute = ({
//   isAuthenticated,
//   component: Component,
//   ...rest
// }) => (
//     <Route {...rest} component={(props) => (
//       isAuthenticated ? (
//         <Redirect to="/dashboard" />
//       ) : (
//           <Component {...props} />
//         )
//     )} />
//   );

// const mapStateToProps = (state) => ({
//   isAuthenticated: !!state.auth.uid
// });

// export default connect(mapStateToProps)(PublicRoute);
