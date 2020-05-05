import React, { Component } from 'react';

//About Page
export default class AboutPage extends Component {
  render() {
    return (
        <div>
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">About Page</h1>
          <h2 class="lead">This page contains info about the app</h2>
        </div>
      </div>
      <p>
         The application is built to create an online recipe book that anyone can add to or edit. The application is developed using the MERN stack
         and deployed on Heroku. The register and login pages are created however do not have any underlying functionality as of yet, so to 
         add a user to the datatase the add user section is used. From here, a user can be selected in the create recipe tab and a recipe added
         to the database under the username. The added recipes can be viewed under the homepage or the recipe tabe where they can 
         be edited or deleted.
      </p>
      </div>
    )
  }
}