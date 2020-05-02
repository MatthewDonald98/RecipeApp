import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          username: ''
        };
      }

      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
      }
      onSubmit(e) {
        e.preventDefault();
        const newUser = {
          username: this.state.username,
        };
        //        axios.post('http://localhost:5000/users/add', newUser)

        console.log(newUser);
        axios.post('/users/add', newUser)
         .then(res => console.log(res.data));
        
        this.setState({
          username: ''
        })
      }

  render() {
    return (
        <div>
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Create User Page</h1>
          <h2 class="lead">This page is for the user to enter their name</h2>
        </div>
      </div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}