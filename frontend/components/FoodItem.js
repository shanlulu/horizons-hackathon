import React from 'react';
import PropTypes from 'prop-types';

const FoodItem = ( { name, expiryDate, imageUrl, category } ) => {
    console.log(imageUrl);
    return (
        <div>
          <img alt={name} src={imageUrl ? imageUrl : '###'} /> <br/>
          category: {category} <br/>
          name: {name} <br/>
          expiryDate: {expiryDate}
        </div>
    );
};

FoodItem.propTypes = {
    name: PropTypes.string,
    expiryDate: PropTypes.string, // careful with what we receive
    imageUrl: PropTypes.string,
    category: PropTypes.string
};


export default FoodItem;
