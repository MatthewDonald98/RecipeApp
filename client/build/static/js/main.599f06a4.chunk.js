(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{164:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(35),i=a.n(o),l=(a(84),a(20)),s=a(24),c=(a(85),a(10)),m=a(11),u=a(13),h=a(12),d=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},r.a.createElement(l.b,{to:"/",className:"navbar-brand"},"RecipeBook"),r.a.createElement("div",{className:"collpase navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(l.b,{to:"/",className:"nav-link"},"Recipes")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(l.b,{to:"/create",className:"nav-link"},"Create New Recipe")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(l.b,{to:"/user",className:"nav-link"},"Create User")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(l.b,{to:"/about",className:"nav-link"},"About")))))}}]),a}(n.Component),p=a(6),g=a(14),b=a.n(g),v=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.recipe.username),r.a.createElement("td",null,e.recipe.ingredients),r.a.createElement("td",null,e.recipe.description),r.a.createElement("td",null,e.recipe.timeToCook),r.a.createElement("td",null,e.recipe.date.substring(0,10)),r.a.createElement("td",null,r.a.createElement(l.b,{to:"/edit/"+e.recipe._id},"edit")," | ",r.a.createElement("a",{href:"#",onClick:function(){e.deleteRecipe(e.recipe._id)}},"delete")))},E=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).deleteRecipe=n.deleteRecipe.bind(Object(p.a)(n)),n.state={recipes:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:5000/recipes/").then((function(t){e.setState({recipes:t.data})})).catch((function(e){console.log(e)}))}},{key:"deleteRecipe",value:function(e){b.a.delete("http://localhost:5000/recipes/"+e).then((function(e){return console.log(e.data)})),this.setState({recipes:this.state.recipes.filter((function(t){return t._id!==e}))})}},{key:"recipeList",value:function(){var e=this;return this.state.recipes.map((function(t){return r.a.createElement(v,{recipe:t,deleteRecipe:e.deleteRecipe,key:t._id})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"jumbotron jumbotron-fluid"},r.a.createElement("div",{class:"container"},r.a.createElement("h1",{class:"display-4"},"Recipe Page"),r.a.createElement("h2",{class:"lead"},"This page contains the recipes created by users and is used to  to store and modify recipes "))),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",null,"User"),r.a.createElement("th",null,"Ingredients"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Time To Cook (minutes)"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Modify"))),r.a.createElement("tbody",null,this.recipeList())))}}]),a}(n.Component),f=a(36),C=a.n(f),k=(a(68),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(p.a)(n)),n.onChangeIngredients=n.onChangeIngredients.bind(Object(p.a)(n)),n.onChangeDescription=n.onChangeDescription.bind(Object(p.a)(n)),n.onChangeTimeToCook=n.onChangeTimeToCook.bind(Object(p.a)(n)),n.onChangeDate=n.onChangeDate.bind(Object(p.a)(n)),n.onSubmit=n.onSubmit.bind(Object(p.a)(n)),n.state={username:"",ingredients:"",description:"",timeToCook:0,date:new Date,users:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:5000/recipes/"+this.props.match.params.id).then((function(t){e.setState({username:t.data.username,ingredients:t.data.ingredients,description:t.data.description,timeToCook:t.data.timeToCook,date:new Date(t.data.date)})})).catch((function(e){console.log(e)})),b.a.get("http://localhost:5000/users/").then((function(t){e.setState({users:t.data.map((function(e){return e.username}))})})).catch((function(e){console.log(e)}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeIngredients",value:function(e){this.setState({ingredients:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeTimeToCook",value:function(e){this.setState({timeToCook:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,ingredients:this.state.ingredients,description:this.state.description,timeToCook:this.state.timeToCook,date:this.state.date};console.log(t),b.a.post("http://localhost:5000/recipes/update/"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Edit Recipe"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{ref:"userInput",className:"form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Ingredients: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.ingredients,onChange:this.onChangeIngredients})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Time to Cook (in minutes): "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.timeToCook,onChange:this.onChangeTimeToCook})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement(C.a,{selected:this.state.date,onChange:this.onChangeDate})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Edit Recipe",className:"btn btn-primary"}))))}}]),a}(n.Component)),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(p.a)(n)),n.onChangeIngredients=n.onChangeIngredients.bind(Object(p.a)(n)),n.onChangeDescription=n.onChangeDescription.bind(Object(p.a)(n)),n.onChangeTimeToCook=n.onChangeTimeToCook.bind(Object(p.a)(n)),n.onChangeDate=n.onChangeDate.bind(Object(p.a)(n)),n.onSubmit=n.onSubmit.bind(Object(p.a)(n)),n.state={username:"",ingredients:"",description:"",timeToCook:0,date:new Date,users:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username})),username:t.data[0].username})})).catch((function(e){console.log(e)}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeIngredients",value:function(e){this.setState({ingredients:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeTimeToCook",value:function(e){this.setState({timeToCook:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,ingredients:this.state.ingredients,description:this.state.description,timeToCook:this.state.timeToCook,date:this.state.date};console.log(t),b.a.post("http://localhost:5000/recipes/add",t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"jumbotron jumbotron-fluid"},r.a.createElement("div",{class:"container"},r.a.createElement("h1",{class:"display-4"},"Add a new Recipe"),r.a.createElement("h2",{class:"lead"},"Fill in the information below to add a new recipe to the book"))),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Ingredients: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.ingredients,onChange:this.onChangeIngredients})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Time to Cook (in minutes): "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.timeToCook,onChange:this.onChangeTimeToCook})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement("div",null,r.a.createElement(C.a,{selected:this.state.date,onChange:this.onChangeDate}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Add New Recipe",className:"btn btn-primary"}))))}}]),a}(n.Component),j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(p.a)(n)),n.onSubmit=n.onSubmit.bind(Object(p.a)(n)),n.state={username:""},n}return Object(m.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username};console.log(t),b.a.post("http://localhost:5000/users/add",t).then((function(e){return console.log(e.data)})),this.setState({username:""})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"jumbotron jumbotron-fluid"},r.a.createElement("div",{class:"container"},r.a.createElement("h1",{class:"display-4"},"About Page"),r.a.createElement("h2",{class:"lead"},"This page contains info about the app"))),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create User",className:"btn btn-primary"}))))}}]),a}(n.Component),N=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"jumbotron jumbotron-fluid"},r.a.createElement("div",{class:"container"},r.a.createElement("h1",{class:"display-4"},"About Page"),r.a.createElement("h2",{class:"lead"},"This page contains info about the app"))),r.a.createElement("p",null,"Info for the about page"))}}]),a}(n.Component);var O=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(d,null),r.a.createElement("br",null),r.a.createElement(s.a,{path:"/",exact:!0,component:E}),r.a.createElement(s.a,{path:"/edit/:id",component:k}),r.a.createElement(s.a,{path:"/create",component:y}),r.a.createElement(s.a,{path:"/user",component:j}),r.a.createElement(s.a,{path:"/about",component:N})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,a){e.exports=a(164)},84:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.599f06a4.chunk.js.map