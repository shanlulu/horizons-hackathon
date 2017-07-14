import React from 'react';
import PropTypes from 'prop-types';
const dbUrl = "http://localhost:3000";


class TemplateItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
      return (
        <div>
          <img alt={this.props.name} src={this.props.imageUrl ? this.props.imageUrl : '###'} /> <br/>
          category: {this.props.category} <br/>
          name: {this.props.name} <br/>
          <button onClick={()=>()}>Add to Fridge</button>
        </div>
      );
    }
};

// const mapStateToProps = (state, ownProps) => ({
//   id: ownProps.id,
//   name: ownProps.name,
//   expiryDate: ownProps.expiryDate,
//   imageUrl: ownProps.imageUrl,
//   category: ownProps.category
// });
//
// const mapDispatchToProps = (dispatch) => ({
//    fetch: (foodObj)=>dispatch(fetch(foodObj))
// });

// FoodItem.propTypes = {
//     name: PropTypes.string,
//     expiryDate: PropTypes.number, // careful with what we receive
//     imageUrl: PropTypes.string,
//     category: PropTypes.string,
//     removeItem: PropTypes.function
// };


export default TemplateItem;
