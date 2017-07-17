import React from 'react';
import TemplateItem from './TemplateItem';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

class Template extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          template: []
        }
    }

    componentDidMount() {
        var template = this;
        const dbUrl = "https://aqueous-peak-57156.herokuapp.com";
        axios.get(dbUrl + '/fetchShop')
         .then((response) =>
             { template.setState({template: response.data})}
         )
          .catch((err) =>
              console.log(err)
          );
    }

    render() {
        return (
          <div className="container" style={{"marginTop": "6em"}}>
            <h2>New Purchases?</h2>
            <div className="row">
              {this.state.template.length>0? this.state.template.map(item =>
                (<TemplateItem key ={item._id}
                  name={item.name}
                  imageUrl={item.imageUrl}
                  category={item.category}
                  id={item._id}
                />)) : null
              }
            </div>
              <Link to='/fridge' type="button" className="btn btn-primary btn-lg btn-block login-button" style={{borderRadius: 20}}>Back to My Fridge</Link>
          </div>
        );
    }
}


export default Template;
