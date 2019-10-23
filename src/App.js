import React, { Component } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Signin from './pages/signin';
import Signup from './pages/signup';
import NewGame from './pages/newGame';
import GameMap from './pages/gameMap';
import PageNotFound from './pages/page-not-found';
import NewStep from './pages/newStep';
import './main.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import ApiFuncs from './helper-functions/apiFuncs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: '',
        response: '',
    }
  } 

  componentDidMount() {
    // ApiFuncs.callApi('/test')
    //   .then(res => {
    //     this.setState({ response: res.message }); 
    //     console.log(res); 
    //     console.log(this.state.response);
    //   })
    //   .catch(err => console.log(err));
  }

  AddUser = (user) => {
    this.setState({user: user});
  };

  isLoggedIn = () => {
    return this.state.user !== '';
  };

  render() {
    console.log("render app user: " + (this.state.user !== '' ? this.state.user : "no user"));
    return (
      <Router>
        <div className="App">
          <Header loggedIn={this.isLoggedIn()} user={this.state.user} />
          <p className="App-intro">{this.state.response}</p>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/signin" render={() => (
              <Signin addUser={this.AddUser} />
            )}/>
            <Route path="/signup" render={() => (
              <Signup addUser={this.AddUser} />
            )}/>
            <Route path="/addGame" render={() => (
              // this.isLoggedIn() ? (
                <NewGame />
              // ) : (
              //   <Redirect to="/signin"/>
              // )
            )}/>
            <Route path="/addStep" render={() => (
              // this.isLoggedIn() ? (
                <NewStep />
              // ) : (
              //   <Redirect to="/signin"/>
              // )
            )}/>
            <Route path="/gameMap" render={() => (
              // this.isLoggedIn() ? (
                <GameMap />
              // ) : (
              //   <Redirect to="/signin"/>
              // )
            )}/>
            {/* <Route path="/blog/:id" render={() => (
              this.isLoggedIn() ? (
                <UpdateBlog />
              ) : (
                <Redirect to="/signin"/>
              )
            )}/> */}
            <Route path="/signout" render={() => {
              this.setState({user:""});
              return <Redirect to="/"/>;
            }}/>
            <Route component={PageNotFound}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
