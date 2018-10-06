import React, { Component } from 'react';
import Auth from './auth/Auth'
import SiteBar from './home/Navbar'
import Splash from './home/Splash'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component { 
  constructor(){
    super()
    this.state={
      sessionToken:'' //best place to handle storing info in React
    }
  }

  componentWillMount=()=>{//grabbing he token if it exists from local storage & setting the token into state if state is still empty
    const token = localStorage.getItem('token') 
    if (token && !this.state.sessionToken){
      this.setState({sessionToken:token})
    }
  }

  setSessionState=(token)=>{// putting the token into a secure place that retains info even when page refreshes
    localStorage.setItem('token',token)
    this.setState({sessionToken:token})
  }

  logout=()=>{//always available in the navbar
    this.setState({sessionToken:''})
    localStorage.clear()
  }

  protectedViews=()=>{ //render components based on whether or not the user is logged in with session token
    if (this.state.sessionToken===localStorage.getItem('token')){
      return(
        <Switch>
          <Route path='/' exact>
            <Splash sessionToken={this.state.sessionToken}/> 
          </Route>
        </Switch>
      ) //render splash if authorized
    }else{
      return(
        <Route path='/auth'>
          <Auth setToken={this.setSessionState}/>
        </Route>
      ) //otherwise render the login
    }
  }

  render() {
    return (
      <Router>
        <div>
          <SiteBar clickLogout={this.logout}/>
          {this.protectedViews()}
        </div>
      </Router>
    );
  }
}

export default App;
