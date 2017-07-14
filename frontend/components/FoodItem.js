import React from 'react';
import PropTypes from 'prop-types';
const dbUrl = "http://localhost:3000";
import axios from 'axios';
import {connect} from 'react-redux';

class FoodItem extends React.Component {
    constructor(props) {
        super(props);
    }
    remove(id){
      console.log(id);
      axios.post(dbUrl+'/remove',{id:id})
      .then(function(res){
        console.log('removed this item:',id);
        this.props.removeItem(id);
      })
    }
    render(){
      return (
        <div>
          <img alt={this.props.name} src={this.props.imageUrl ? this.props.imageUrl : '###'} /> <br/>
          category: {this.props.category} <br/>
          name: {this.props.name} <br/>
          expiryDate: {this.props.expiryDate} <br/>
          id: {this.props.id} <br/>
          <button onClick={()=>this.remove(this.props.id)}>Remove</button>
        </div>
      );
    }
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
   removeItem: (id)=>dispatch(removeItem(id))
});

FoodItem.propTypes = {
    name: PropTypes.string,
    expiryDate: PropTypes.number, // careful with what we receive
    imageUrl: PropTypes.string,
    category: PropTypes.string
};


export default connect(mapStateToProps, mapDispatchToProps)(FoodItem);
