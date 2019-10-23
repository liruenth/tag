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
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import ApiFuncs from './helper-functions/apiFuncs';

class Routes extends Component {
  render() {
    return (
      <Router>
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
        <Route path='*' component={PageNotFound}/>
      </Router>
    );
  }
}

export default Routes;
