import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import  basecss  from '../assets/stylesheets/base.js';

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
  console.log('basecss', basecss)
  return (
    <div>
      <div className="container">
        <div className="row main">
          <div className="main main-login main-center" style={{backgroundColor: '#FAEBD7', borderRadius: 20, marginTop: 80}}>
            <h3 style={{textAlign: 'center', color: '#D2691E'}}>Login to Food Master</h3><br />
            {/* </div>
				<div class="main-login main-center" style="background-color:#FAEBD7"> */}
            <form className method="post" action="#">
              <div className="form-group">
                <label htmlFor="email" style={{color: '#D2691E'}} className="cols-sm-2 control-label">Your Email</label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-envelope fa" style={{color: '#D2691E'}} aria-hidden="true" /></span>
                    <input type="text" className="form-control" name="email" id="email" placeholder="Enter your Email"
                    onChange={(event) => this.handleEmail(event)}/>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password" style={{color: '#D2691E'}} className="cols-sm-2 control-label">Password</label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-lock fa-lg" style={{color: '#D2691E'}} aria-hidden="true" /></span>
                    <input type="password" className="form-control" name="password" id="password" placeholder="Enter your Password"
                    onChange={(event) => this.handlePassword(event)}/>
                  </div>
                </div>
              </div>
              <div className="form-group ">
                  {/* <Link to='/fridge' type="button" id="button" className="btn btn-primary btn-lg btn-block login-button">Login Here</Link> */}
                <Link to="/fridge" type="button" id="button" className="btn btn-primary btn-lg btn-block login-button" style={{borderRadius: 20}}>Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
  }
};

Login.propTypes = {
    name: PropTypes.string,
    password: PropTypes.string
};


export default Login;
