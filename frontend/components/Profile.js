import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import FridgeContent from './FridgeContent';
import Template from './Template';
import KeyInItems from './KeyInItems';
// import {connect} from 'react-redux';
// import { Route } from 'react-router-dom';
import Content from './Content';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <KeyInItems />
            <FridgeContent/>
          </div>
        );
    }
}

export default Profile;
