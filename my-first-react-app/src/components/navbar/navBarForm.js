/**
 * Created by Arjun Vyas on 9/5/2017.
 */
/**
 * Created by Arjun Vyas on 9/5/2017.
 */
import React, { Component } from 'react';

class NavBarForm extends Component {
  render() {
    return (

            <form className="navbar-form navbar-right">
              <div className="form-group">
                <input type="text" placeholder="Email" className="form-control"/>
              </div>
              <div className="form-group">
                <input type="password" placeholder="Password" className="form-control"/>
              </div>
              <button type="submit" className="btn btn-success">Sign in</button>
            </form>
    );
  }
}

export default NavBarForm;
