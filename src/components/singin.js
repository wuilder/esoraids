import React, { Component } from 'react'
import axios from 'axios'

export default class SingIn extends Component {

  state = {
    message: "",
  }

  handleSubmit = e => {
    e.preventDefault();

    const data = {
      email: this.email,
      password: this.password
    }

    axios.post('auth/login', data)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.token);
      this.props.history.push("/probando");
    })
    .catch(error => {
      this.setState({ message: error.message});
    });
  };

  errorMessage(){
    if(this.state.message !== ""){
      return (
        <div className="alert alert-danger">
          <p>{this.state.message}</p>
        </div>
      )
    }
  };

  render(){

    return(
      <div className="row align-items-center" style={{height: 300}}>
        <div className="col-4">
        </div>
        <div className="col-4">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="email" id="login" className="form-control" name="login" placeholder="Email" onChange={e => this.email = e.target.value} />
            </div>
            <div className="form-group">
              <input type="password" id="password" className="form-control" name="login" placeholder="Password" onChange={e => this.password = e.target.value} />
            </div>
            <button className="btn btn-secondary btn-block">Log in</button> 
          </form>

          {this.state.message}
        </div>
        <div className="col-4">
        </div>
      </div>
    )
  }
}