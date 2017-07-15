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
            <span>Type in Fridge new food Item</span>
            <KeyInItems />
            <FridgeContent />
            <Template />
          </div>
        );
    }
}

export default Profile;