// import PropTypes from 'prop-types';
import React from 'react';
// import { connect } from 'react-redux';
import Profile from '../components/Profile';

const AppContainer = () => {
    return (
        <div>
            <Profile />
        </div>
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
