import React, { Component } from 'react';
import './assets/css/App.css';
import  NavBar from  './components/navbar';
import { Route } from 'react-router-dom'
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';

class App extends Component {
  state = {
    btnToggle: false,
}

toggleButton = () => {
    this.setState({btnToggle : !this.state.btnToggle});
}

  render() {
    return (
      <div className="App">
        <NavBar pageTitle="HomePage" showForm={true}/>
        <div className="container">
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/about" component={AboutPage} />
        </div>
      </div>
    );
  }
}

export default App;
