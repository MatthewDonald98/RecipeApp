import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Recipe = props => (
    <tr>
      <td>{props.recipe.username}</td>
      <td>{props.recipe.ingredients}</td>
      <td>{props.recipe.description}</td>
      <td>{props.recipe.timeToCook}</td>
      <td>{props.recipe.date.substring(0,10)}</td>
      <td>
        <Link to={"/edit/"+props.recipe._id}>edit</Link> | <a href="#" onClick={() => { props.deleteRecipe(props.recipe._id) }}>delete</a>
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
        axios.get('http://localhost:5000/recipes/')
         .then(response => {
           this.setState({ recipes: response.data });
         })
         .catch((error) => {
            console.log(error);
         })
      }

      deleteRecipe(id) {
        axios.delete('http://localhost:5000/recipes/'+id)
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
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Ingredients</th>
              <th>Description</th>
              <th>timeToCook</th>
              <th>Date</th>
              <th>Actions</th>
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