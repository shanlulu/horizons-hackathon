import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        password: ''
      }
    }

    handleName(event){
    this.setState({name: event.target.value})
}
    handlePassword(event){
    this.setState({password: event.target.value})
}
    handleSubmit(e){
    e.preventDefault();
    var name = this.state.name;
    var phone = this.state.password;

    this.setState({name: '', password: ''});
    console.log(this.state);
}

    render() {
    return (
        <div>
          <h1>Welcome</h1>
          <form>
            <input type="text" placeholder="Enter Name" value={this.state.name} onChange={(event) =>
              this.handleName(event)}/>
              <input type="password" placeholder="Enter Password" value={this.state.password} onChange={(event) =>
              this.handlePassword(event)}/>
              <Link to="/fridge">Check out fridge</Link>
          </form>
        </div>
    );
  }
};

Login.propTypes = {
    name: PropTypes.string,
    password: PropTypes.string
};


export default Login;
