import React, { Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Default from "./screens/default/App.jsx";

export default class Root extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/default'>default page</Link>
              </li>
            </ul>
          </nav>

          <Route path='/default' exact component={Default} />
        </div>
      </Router>
    );
  }
}
