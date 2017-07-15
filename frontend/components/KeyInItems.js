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
        console.log('res from key in is',res.data.id)
        axios.post(dbUrl+'/saveToShop',{id: res.data.id})

        axios.get(dbUrl + '/fetch')
         .then(
           (response) =>
             {console.log("updated by key in");
             fridge.props.fetch(response.data); })
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
            <form className="main main-login main-center" style={{backgroundColor: '#FAEBD7', borderRadius: 20, marginTop: 80}}>
              <h3 style={{textAlign: 'left', color: '#D2691E','paddingLeft':"50"}}>Type in Fridge new food Item</h3><br />
              <label htmlFor="email" style={{color: '#D2691E'}} className="cols-sm-2 control-label">Food: </label>
              <input className="form-control" onChange={(name)=>this.updateName(name)} type='text' placeholder = 'food' required/>
              <br/>
              <label htmlFor="email" style={{color: '#D2691E'}} className="cols-sm-2 control-label">Expiry Date: </label>
              <input className="form-control" onChange={(date)=>this.updateDate(date)} type='date' required/>
              <input style={{"marginBottom":20}} className="form-control" onClick={(e)=>this.onSubmit(e)} type='submit' value='Submit'/>
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
