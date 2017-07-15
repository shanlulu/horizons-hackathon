// import PropTypes from 'prop-types';
import React from 'react';
// import { connect } from 'react-redux';
import Login from '../components/Login';
import { Route, BrowserRouter } from 'react-router-dom';
import Profile from '../components/Profile';
import Template from '../components/Template';
const AppContainer = () => {
    return (
      <BrowserRouter basename='/'>
        <div>

          <Route exact={true} path='/login' component={Login}/>
          <Route exact={true} path='/ownfridge' component={Profile}/>
          <Route exact={true} path='/template' component={Template}/>
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
