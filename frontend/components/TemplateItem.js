import React from 'react';
import PropTypes from 'prop-types';
const dbUrl = "http://localhost:3000";
import axios from 'axios';
import {connect} from 'react-redux';
import { fetch } from '../actions/index';

class TemplateItem extends React.Component {
    constructor(props) {
        super(props);
    }
    add(id){
      const fridge = this;
      axios.post(dbUrl+'/saveFromShop',{id:id})
      .then(function(res){
        console.log('res is',res)
        axios.get(dbUrl + '/fetch')
         .then((response) =>
             {console.log("updated"); fridge.props.fetch(response.data); }
         )
      })
      .catch((err) =>
          console.log('something',err)
      );
    }
    render(){
      return (
        <div>
          <div className="col-md-2 col-xs-5 thumbnail" style={{"margin":"1em !important"}}>
              <img src={this.props.imageUrl} style={{"height":"200px !important", "width":"100%","textAlign": "center"}} />
                <h4 style={{"margin": "1em", "textAlign": "center"}}>{this.props.name}</h4>
                <hr />
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <p className="price">{this.props.category}</p>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <button onClick={()=>this.add(this.props.id)}
                        >Add to Fridge</button>
                    </div>
                  </div>
          </div>
  			</div>
        /* <div>
          <img alt={this.props.name} src={this.props.imageUrl} style={{"height":"200px !important", "width":"100%","textAlign": "center"}} /><br/>
          category: {this.props.category} <br/>
          name: {this.props.name} <br/>
          <button onClick={()=>this.add(this.props.id)}
            >Add to Fridge</button>
        </div> */
      );
    }
};

const mapStateToProps = () => ({});

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


export default connect(mapStateToProps, mapDispatchToProps)(TemplateItem);
