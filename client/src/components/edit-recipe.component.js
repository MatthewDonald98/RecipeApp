import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class EditRecipe extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeIngredients = this.onChangeIngredients.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeTimeToCook = this.onChangeTimeToCook.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      name: '',
      ingredients: '',
      description: '',
      timeToCook: 0,
      date: new Date(),
      users: []
    }
  }
//    axios.get('http://localhost:5000/recipes/'+this.props.match.params.id)

  componentDidMount() {
    axios.get('/recipes/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,   
          name: response.data.name,                 
          ingredients: response.data.ingredients,
          description: response.data.description,
          timeToCook: response.data.timeToCook,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
      //    axios.get('http://localhost:5000/users/')


      axios.get('/users/')
      .then(response => {
        this.setState({ users: response.data.map(user => user.username) });
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

  onChangeName(e) {
    this.setState({
      name: e.target.value
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
      name: this.state.name,
      ingredients: this.state.ingredients,
      description: this.state.description,
      timeToCook: this.state.timeToCook,
      date: this.state.date,
    };

    console.log(recipe);

    //    axios.post('http://localhost:5000/recipes/update/'+this.props.match.params.id, recipe)


    axios.post('/recipes/update/'+this.props.match.params.id, recipe)
      .then(res => console.log(res.data));
    
    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Edit Recipe</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <select ref="userInput"
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
            <label>Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
                />
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
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Edit Recipe" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}