import React from 'react';
import PropTypes from 'prop-types';
const dbUrl = "http://localhost:3000";
import axios from 'axios';
import {connect} from 'react-redux';
import { fetch } from '../actions/index';

class FoodItem extends React.Component {
    constructor(props) {
        super(props);
    }
    remove(id){
      const fridge = this;
      axios.post(dbUrl+'/remove',{id:id})
      .then(function(res){
        axios.get(dbUrl + '/fetch')
         .then((response) =>
             { fridge.props.fetch(response.data)}
         )
      })
      .catch((err) =>
          console.log(err)
      );
    }
    render(){
      return (
        <div>
          <img alt={this.props.name} src={this.props.imageUrl ? this.props.imageUrl : '###'} /> <br/>
          category: {this.props.category} <br/>
          name: {this.props.name} <br/>
          expiryDate: {this.props.expiryDate} <br/>
          <button onClick={()=>this.remove(this.props.id)}>Remove</button>
        </div>
      );
    }
};

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id,
  name: ownProps.name,
  expiryDate: ownProps.expiryDate,
  imageUrl: ownProps.imageUrl,
  category: ownProps.category
});

const mapDispatchToProps = (dispatch) => ({
   fetch: (foodObj)=>dispatch(fetch(foodObj))
});

// FoodItem.propTypes = {
//     name: PropTypes.string,
//     expiryDate: PropTypes.number, // careful with what we receive
//     imageUrl: PropTypes.string,
//     category: PropTypes.string,
//     removeItem: PropTypes.function
// };


export default connect(mapStateToProps, mapDispatchToProps)(FoodItem);
