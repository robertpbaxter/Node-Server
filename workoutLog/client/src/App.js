import React, { Component } from 'react';
import './App.css';
import SiteBar from './home/Navbar'
import Auth from './auth/Auth'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component { 
  constructor(){
    super()
    this.state={
      sessionToken:'' //best place to handle storing info in React
    }
  }

  componentWillMount=()=>{
    const token = localStorage.getItem('token') //grabbing he token if it exists from local storage
    if (token && !this.state.sessionToken){//setting the token into state if state is still empty
      this.setState({sessionToken:token})
    }
  }

  setSessionState=(token)=>{
    localStorage.setItem('token',token)// putting the token into a secure place that retains info even when page refreshes
    this.setState({sessionToken:token})
  }

  logout=()=>{
    this.setState({sessionToken:''})
    localStorage.clear()
  }

  render() {
    return (
      <div>
        <SiteBar clickLogout={this.logout}/>
        <Auth setToken={this.setSessionState}/>
      </div>
    );
  }
}

export default App;
