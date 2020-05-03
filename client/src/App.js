import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import RecipesList from "./components/recipes-list.component.js";
import EditRecipe from "./components/edit-recipe.component";
import CreateRecipe from "./components/create-recipe.component";
import CreateUser from "./components/create-user.component";
import AboutPage from "./components/about-page.component";
import RegisterPage from "./components/register-page.component.js";
import LoginPage from "./components/login-page.component.js";

 
function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
        <br/>
        <Route path="/" exact component={RecipesList} />
        <Route path="/edit/:id" component={EditRecipe} />
        <Route path="/create" component={CreateRecipe} />
        <Route path="/user" component={CreateUser} />
        <Route path="/about" component={AboutPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />

      </div>
    </Router>
  );
 }
 
export default App;

