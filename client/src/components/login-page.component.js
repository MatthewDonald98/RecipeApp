import React, { Component } from 'react';

export default class LoginPage extends Component {
  render() {
    return (
        <div>
       <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Login Page</h1>
          <h2 class="lead">This page is for the user to login to their account</h2>
        </div>
      </div>
      <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label> Username: </label>
            <input  type="text"
                required
                className="form-control"
                />
          </div>
          <div className="form-group"> 
            <label> Password: </label>
            <input  type="password"
                required
                className="form-control"
                />
          </div>
        </form>
      </div>
    )
  }
}