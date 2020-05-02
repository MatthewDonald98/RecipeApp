import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Recipe = props => (
    <tr>
      <td>{props.recipe.username}</td>
      <td>{props.recipe.name}</td>
      <td>{props.recipe.ingredients}</td>
      <td>{props.recipe.description}</td>
      <td>{props.recipe.timeToCook}</td>
      <td>{props.recipe.date.substring(0,10)}</td>
      <td>
        <Link to={"/edit/"+props.recipe._id}>Edit</Link> | <a href="#" onClick={() => { props.deleteRecipe(props.recipe._id) }}>Delete</a>
      </td>
    </tr>
  )

export default class RecipesList extends Component {

    constructor(props) {
        super(props);
        this.deleteRecipe = this.deleteRecipe.bind(this);
        this.state = {recipes: []};
      }
      //http://localhost:5000/recipes/

      componentDidMount() {
        axios.get('/recipes/')
         .then(response => {
           this.setState({ recipes: response.data });
         })
         .catch((error) => {
            console.log(error);
         })
      }
//        axios.delete('http://localhost:5000/recipes/'+id)

      deleteRecipe(id) {
        axios.delete('/recipes/'+id)
          .then(res => console.log(res.data));
        this.setState({
          recipes: this.state.recipes.filter(el => el._id !== id)
        })
      }

      recipeList() {
        return this.state.recipes.map(currentrecipe => {
          return <Recipe recipe={currentrecipe} deleteRecipe={this.deleteRecipe} key={currentrecipe._id}/>;
        })
      }

  render() {
    return (
        <div>
          <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Recipe Page</h1>
          <h2 class="lead">This page contains the recipes created by users and is used 
          to  to store and modify recipes </h2>
        </div>
      </div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>User</th>
              <th>Name</th>
              <th>Ingredients</th>
              <th>Description</th>
              <th>Time To Cook (minutes)</th>
              <th>Date</th>
              <th>Modify</th>
            </tr>
          </thead>
          <tbody>
            { this.recipeList() }
          </tbody>
        </table>
      </div>
    )
  }
}