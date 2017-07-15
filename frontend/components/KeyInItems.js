import React from 'react';
import TemplateItem from './TemplateItem';
import axios from 'axios';
import {connect} from 'react-redux';
import { fetch } from '../actions/index';
const dbUrl = "http://localhost:3000";

class KeyInItems extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
          name:'',
          date: ''
        }
    }

    onSubmit(e){
      const fridge = this;
      e.preventDefault();
      console.log("the state !",this.state,'type of date is',typeof(this.state.date))
      axios.post(dbUrl+'/save', {
        name: this.state.name,
        date: this.state.date
      })
      .then(function(res){
        console.log('res from key in is',res)
        axios.get(dbUrl + '/fetch')
         .then((response) =>
             {console.log("updated by key in");
             fridge.props.fetch(response.data); }
         )
      })
      .catch((err) =>
          console.log('something',err)
      );

    }
    updateName(name){
      this.setState({
        name: name.target.value
      })
    }
    updateDate(date){
      this.setState({date: date.target.value})
    }
    render() {
        return (
          <div>
            <form>
              Food Name:
              <input onChange={(name)=>this.updateName(name)} type='text' placeholder = 'food' required/>
              <br/>
              <span>Expiry Date: </span>
              <input onChange={(date)=>this.updateDate(date)} type='date' required/>
              <input onClick={(e)=>this.onSubmit(e)} type='submit' value='Submit'/>
            </form>
          </div>
        );
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
   fetch: (foodObj)=>dispatch(fetch(foodObj))
});


export default connect(mapStateToProps, mapDispatchToProps)(KeyInItems);
