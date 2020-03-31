import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import { getUser } from "../dux/reducer";


class Register extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      user_name: '',
      username: '',
      password: '',
    }
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleRegister = () => {
    const {
      user_name,
      username, 
      password
    } = this.state;

    axios
      .post(`/api/register`, {
        user_name,
      username, 
      password
      })
      .then(res => {
        this.props.getUser(res.data);
        this.props.history.push("/search");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <input 
        placeholder="Name"
        name="user_name"
        value={this.user_name}
        onChange={this.handleInput}
        />
        <input 
        placeholder="Username"
        name="username"
        value={this.username}
        onChange={this.handleInput}
        />
        <input 
        placeholder="Password"
        name="password"
        value={this.password}
        onChange={this.handleInput}
        />

        <button onClick={this.handleRegister}>REGISTER</button>
        <Link to="/">Click here to Login</Link>
      </div>
    )
  }
}

export default connect(null, {getUser})(Register)