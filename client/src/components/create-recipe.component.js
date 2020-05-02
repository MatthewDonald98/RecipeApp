import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateRecipe extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeIngredients = this.onChangeIngredients.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeTimeToCook = this.onChangeTimeToCook.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      ingredients: '',
      description: '',
      timeToCook: 0,
      date: new Date(),
      users: []
    }
  }
  // http://localhost:5000/users/

  componentDidMount() {
    axios.get('/users/')
        .then(response => {
         if (response.data.length > 0) {
        this.setState({ 
        users: response.data.map(user => user.username),
        username: response.data[0].username
      });
    }
  })
  .catch((error) => {
    console.log(error);
  })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
}

onChangeIngredients(e) {
    this.setState({
      ingredients: e.target.value
    });
  }

onChangeDescription(e) {
  this.setState({
    description: e.target.value
  });
}

onChangeTimeToCook(e) {
  this.setState({
    timeToCook: e.target.value
  });
}

onChangeDate(date) {
  this.setState({
    date: date
  });
}

onSubmit(e) {
  e.preventDefault();

  const recipe = {
    username: this.state.username,
    ingredients: this.state.ingredients,
    description: this.state.description,
    timeToCook: this.state.timeToCook,
    date: this.state.date,
  };
//  axios.post('http://localhost:5000/recipes/add', recipe)

  console.log(recipe);
  axios.post('/recipes/add', recipe)
  .then(res => console.log(res.data));
  
  window.location = '/';
}
render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Add a new Recipe</h1>
           <h2 class="lead">Fill in the information below to add a new recipe to the book</h2>
         </div>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>
          <div className="form-group"> 
            <label>Ingredients: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.ingredients}
                onChange={this.onChangeIngredients}
                />
          </div>
          <div className="form-group"> 
            <label>Description: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
                />
          </div>
          <div className="form-group">
            <label>Time to Cook (in minutes): </label>
            <input 
             type="text" 
             className="form-control"
             value={this.state.timeToCook}
             onChange={this.onChangeTimeToCook}
             />
       </div>
       <div className="form-group">
         <label>Date: </label>
         <div>
           <DatePicker
             selected={this.state.date}
             onChange={this.onChangeDate}
           />
         </div>
       </div>

       <div className="form-group">
         <input type="submit" value="Add New Recipe" className="btn btn-primary" />
       </div>
     </form>
   </div>
 )
}
}