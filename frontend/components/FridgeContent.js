import React from 'react';
import PropTypes from 'prop-types';
import FoodItem from './FoodItem';
import axios from 'axios';
import { removeItem, fetch } from '../actions/index';
import {connect} from 'react-redux';

class FridgeContent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var fridge = this;
        const dbUrl = "http://localhost:3000";
        axios.get(dbUrl + '/fetch')
         .then((response) =>
             { this.props.fetch(response.data)
             }
         )
          .catch((err) =>
              console.log(err)
          );
    }

    render() {
        return (
          <div>
            <div>
              {this.props.foodItems.expired? this.props.foodItems.expired.map(item =>
                {
                  return (<FoodItem key ={item._id}
                    name={item.name}
                    id={item._id}
                    expiryDate={item.date}
                    imageUrl={item.imageUrl}
                    category={item.category}
                  />)
                })
                : null
              }
            </div>
            <div>
              {this.props.foodItems.threeDay? this.props.foodItems.threeDay.map(item =>
                (<FoodItem key ={item._id}
                  name={item.name}
                  expiryDate={item.date}
                  imageUrl={item.imageUrl}
                  category={item.category}
                  id={item._id}
                />)) : null
              }
            </div>
            <div>
              {this.props.foodItems.aWeek? this.props.foodItems.aWeek.map(item =>
                (<FoodItem key ={item._id}
                  name={item.name}
                  expiryDate={item.date}
                  imageUrl={item.imageUrl}
                  category={item.category}
                  id={item._id}
                />)) : null
              }
            </div>
            <div>
              {this.props.foodItems.longer? this.props.foodItems.longer.map(item =>
                (<FoodItem key ={item._id}
                  name={item.name}
                  expiryDate={item.date}
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

const mapStateToProps = (state) => ({
   foodItems: state.fridgeItem
});

const mapDispatchToProps = (dispatch) => ({
   fetch: (foodItemsObj)=> dispatch(fetch(foodItemsObj)),
   removeItem: ()=>dispatch(removeItem(id))
});

FoodItem.propTypes = {
    name: PropTypes.string,
    expiryDate: PropTypes.number, // careful with what we receive
    imageUrl: PropTypes.string,
    category: PropTypes.string
};


export default connect(mapStateToProps, mapDispatchToProps)(FridgeContent);
