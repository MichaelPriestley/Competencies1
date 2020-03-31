import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './search.css'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
     userInput: ''
    }
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log(this.props)
    return (
      <div id="search-page">
      <header className="search-header">
        <input 
        placeholder="Search by Artist, Album, Song, or Genre"
        name="userInput"
        value={this.userInput}
        onChange={this.handleInput}
        />
        <button>FIND</button>
        </header>
        <div className="middle-box">
          <div className="circle"></div>
          <div className="square"></div>
        </div>
      <section>{/* Competency 54D-2 ******************************/}

        <footer style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>{/* Competency 54D-3 ***********************************/}
        <article>This web app is pretty lame but it sure does help to pass of my competencies.</article>{/* Competency 54D-1 *****************************/}
        <p>Thanks for visiting the {this.props.match.path} portion of our site.</p>{/* Competency for Routing Match Object*********************************/}
        All Rights Reserved.
        </footer>
        </section>
      </div>
    )
  }
}

export default Search