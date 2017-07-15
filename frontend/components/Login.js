import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: ''
      }
    }

    handleEmail(event){
    this.setState({email: event.target.value})
}
    handlePassword(event){
    this.setState({password: event.target.value})
}
    handleSubmit(e){
    e.preventDefault();
    var email = this.state.email;
    var password = this.state.password;

    this.setState({email: '', password: ''});
    console.log(this.state);
}

render() {
  return (
    <div>
      <div className="container">
        <div className="row main">
          <div className="main main-login main-center">
            <h3 style={{textAlign: 'center'}}>Login to Food Master</h3>
          </div>
          <div className="main-login main-center">
            <form className method="post" action="#">
              <div className="form-group">
                <label htmlFor="email" className="cols-sm-2 control-label">Your Email</label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true" /></span>
                    <input type="text" className="form-control" name="email" id="email" placeholder="Enter your Email"
                    onChange={(event) => this.handleEmail(event)}/>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="cols-sm-2 control-label">Password</label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true" /></span>
                    <input type="password" className="form-control" name="password" id="password" placeholder="Enter your Password"
                      onChange={(event) => this.handlePassword(event)}/>
                  </div>
                </div>
              </div>
              <div className="form-group ">
                <a href="/fetch" type="button" id="button" className="btn btn-primary btn-lg btn-block login-button">Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Link to='/fridge'>Go to Profile</Link> */}
    </div>
    );
  }
};

Login.propTypes = {
    name: PropTypes.string,
    password: PropTypes.string
};


export default Login;
