import React from 'react';
import TemplateItem from './TemplateItem';
import axios from 'axios';

class Template extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          template: []
        }
    }

    componentDidMount() {
        var template = this;
        const dbUrl = "http://localhost:3000";
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
          </div>
        );
    }
}


export default Template;
