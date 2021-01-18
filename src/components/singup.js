import React, { Component } from 'react'
import axios from 'axios'

export default class SingUp extends Component {
  constructor(){
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
      error: {},
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state)
    let errors = {};
    const data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.confirm_password
    }

    if(data.username === ''){
      this.setState({error: errors["username"] = "Por Favor ingrese un username"})
    }

    if(data.email === ''){
      errors["email"] = "Por Favor ingrese un email"
    }

    if(data.password === ''){
      errors["password"] = "Por Favor ingrese una password"
    }

    if(data.confirm_password === ''){
      errors["confirm_password"] = "Por Favor ingrese una password"
    }

    this.setState({ error: errors })
  
    axios.post('auth/register', data)
    .then(res => {
      console.log(res);
      this.props.history.push("/");
    })
    .catch(error => {
      console.log(error)
    })
  }

  render(){
    return(
      <div className="row align-items-center" style={{height: 400}}>
        <div className="col-4">
        </div>
        <div className="col-4">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" name="username" placeholder="Username" onChange={e =>  this.setState({ username: e.target.value})} /> 
            </div>
            <div className="form-group">
              <input type="email" className="form-control" name="email" placeholder="Email" onChange={e => this.setState({ email: e.target.value })} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" name="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value})} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" name="confrim_password" placeholder="Confirm Password" onChange={e => this.setState({ confirm_password: e.target.value})} />
            </div>
            <button className="btn btn-secondary btn-block">Sign up</button>
          </form>
        </div>
        <div className="col-4">
        </div>
      </div>
    )
  }
}