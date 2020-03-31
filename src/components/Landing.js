import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUser} from '../dux/reducer'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Landing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

   handleLogin = () => {
            const {username, password} = this.state
            axios.post(`/api/login`, {username, password})
            .then(res => {
                this.props.getUser(res.data)
                console.log(res.data)
                this.props.history.push('/search')
            }).catch(err => console.log(err))
        }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <input 
        placeholder="Username"
        name="username"
        value={this.username}
        onChange={this.handleInput}/>

        <input 
        placeholder="Password"
        name="password"
        value={this.password}
        onChange={this.handleInput}
        />

        <button onClick={this.handleLogin}>LOGIN</button>
        <Link to='/register'>click here to register</Link>
      </div>
    )
  }
}

export default connect(null, {getUser})(Landing)