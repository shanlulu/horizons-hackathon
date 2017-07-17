import React from 'react';
import PropTypes from 'prop-types';
import FoodItem from './FoodItem';
import axios from 'axios';
import { removeItem, fetch } from '../actions/index';
import {connect} from 'react-redux';
import { Route, Link } from 'react-router-dom';
// const imageUrl = require(`http://dingo.care2.com/pictures/greenliving/1249/1248909.large.jpg`);

class FridgeContent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var fridge = this;
        const dbUrl = "https://aqueous-peak-57156.herokuapp.com";
        axios.get(dbUrl + '/fetch')
         .then((response) =>
             { fridge.props.fetch(response.data)
             }
         )
          .catch((err) =>
              console.log(err)
          );
    }

    render() {
        return (
          <div className="container" style={{"marginTop": "4em"}}>
            <a href="/recipes" type="button" className="btn btn-primary btn-lg btn-block login-button" style={{borderRadius: 20, border:"none", color: '#D2691E', 'backgroundColor':'#adf783'}}><b>Recipe Finder for My Fridge</b></a>
          <br/>
            <a href='/categories' type="button" className="btn btn-primary btn-lg btn-block login-button" style={{borderRadius: 20, 'backgroundColor': '#f7f5a0', color: '#D2691E', border:'none'}}><b>Browse Foods to Add</b></a>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2>Expired!</h2>
            <div className="row">
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
            <h2>Enjoy Within 3 Days</h2>
            <div className="row">
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
            <h2>1 Week</h2>
            <div className="row">
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
            <h2>Any Time</h2>
            <div className="row">
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
