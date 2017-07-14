import React from 'react';
import PropTypes from 'prop-types';
import TemplateItem from './TemplateItem';
import axios from 'axios';
// import {connect} from 'react-redux';

class FridgeContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          template: []
        }
    }

    componentDidMount() {
        var template = this;
        const dbUrl = "http://localhost:3000";
        axios.get(dbUrl + '/fetchShop')
         .then((response) =>
             { template.setState({template: response.data})}
         )
          .catch((err) =>
              console.log(err)
          );
    }

    render() {
        return (
          <div>
            <div>
              {this.props.template.length>0? this.props.template.map(item =>
                (<TemplateItem key ={item._id}
                  name={item.name}
                  imageUrl={item.imageUrl}
                  category={item.category}
                  id={item._id}
                />)) : null
              }
            </div>
          </div>
        );
    }
}


FoodItem.propTypes = {
    name: PropTypes.string,
    expiryDate: PropTypes.number, // careful with what we receive
    imageUrl: PropTypes.string,
    category: PropTypes.string
};


export default Template;
