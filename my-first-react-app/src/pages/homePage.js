/**
 * Created by Arjun Vyas on 9/5/2017.
 */
import React, { Component } from 'react';
import  NavBar from  './../components/navbar';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <NavBar pageTitle="HomePage" showForm={true}/>
        <div className="jumbotron">
          <div className="container">
            <h1>Hello, world!</h1>
            <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
