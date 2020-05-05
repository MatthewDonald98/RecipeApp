import React, { Component } from 'react';

//Register Page
export default class RegisterPage extends Component {
  render() {
    return (
        <div>
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Register Page</h1>
          <h2 class="lead">This page is for the user to register an account</h2>
        </div>
      </div>
      <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label> First Name: </label>
            <input  type="text"
                required
                maxLength = "20"
                className="form-control"
                />
          </div>
          <div className="form-group"> 
            <label> Last Name: </label>
            <input  type="text"
                required
                maxLength = "20"
                className="form-control"
                />
          </div>
          <div className="form-group"> 
            <label> Username: </label>
            <input  type="text"
                required
                maxLength = "20"
                className="form-control"
                />
          </div>
          <div className="form-group"> 
            <label> Password: </label>
            <input  type="password"
                required
                minLength = "6"
                maxLength = "30"
                className="form-control"
                />
          </div>
          <div className="form-group"> 
            <label> Confirm Password: </label>
            <input  type="password"
                required
                minLength = "6"
                maxLength = "30"
                className="form-control"
                />
          </div>
          <div className="form-group"> 
            <label> Email: </label>
            <input  type="email"
                required
                className="form-control"
                />
          </div>

       <div className="form-group">
         <input type="submit" value="Create Profile" className="btn btn-primary" />
       </div>
     </form>
      
      </div>
    )
  }
}