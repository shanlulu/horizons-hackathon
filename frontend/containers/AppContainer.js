// import PropTypes from 'prop-types';
import React from 'react';
// import { connect } from 'react-redux';
import Login from '../components/Login';
import { Route, BrowserRouter } from 'react-router-dom';
import Profile from '../components/Profile';
const AppContainer = () => {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' component={Login}/>
          <Route exact={true} path='/fridge' component={Profile}/>
        </div>
        </BrowserRouter>
    );
};

// AppContainer.propTypes = {
//     // name: PropTypes.string,
// };

// const mapStateToProps = (/* state*/) => {
//     return {
//         // name: state.name
//     };
// };

// const mapDispatchToProps = (/* dispatch */) => {
//     return {
//     };
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(AppContainer);

export default AppContainer;
