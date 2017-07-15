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
          <button className="btn btn-danger" style={{margin: "15px"}}>Log Out</button>
            <form className="main main-login main-center" style={{backgroundColor: '#FAEBD7', borderRadius: 20, marginTop: 50}}>
              <h3 style={{textAlign: 'center', color: '#D2691E'}}>Add to My Fridge</h3><br />
              <label htmlFor="email" style={{color: '#D2691E'}} className="cols-sm-2 control-label">Food: </label>
              <input className="form-control" onChange={(name)=>this.updateName(name)} type='text' placeholder = 'Item Name' required/>
              <br/>
              <label htmlFor="email" style={{color: '#D2691E'}} className="cols-sm-2 control-label">Expiration Date: </label>
              <input className="form-control" onChange={(date)=>this.updateDate(date)} type='date' required/>
              <br/>
              <input style={{"marginBottom":20, backgroundColor: '#FFE68B', color:'#D2691E', border: "none"}} className="form-control" onClick={(e)=>this.onSubmit(e)} type='submit' value='Submit'/>
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
