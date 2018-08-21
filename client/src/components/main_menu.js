import React, {Component} from 'react';
import '../common/foundation.min.css';
import {
          GridContainer,Grid,Cell,
          Label,Link,Button,
          Colors,
          Menu,
          MenuItem
       } from 'react-foundation';
//const     $ = require('jquery')

class MainMenu extends Component {
    componentDidMount() {
//        $(document).foundation();
    }

    render() {
        return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="dropdown menu" data-dropdown-menu="data-dropdown-menu">
                    <li>
                        <a href="#">Item 1</a>
                    </li>
                    <li>
                        <a href="#">Item 2</a>
                    </li>
                    <li>
                        <a href="#">Item 3</a>
                    </li>
                    <li>
                        <a href="#">Item 4</a>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
            <Menu className="dropdown">
              <MenuItem className="active"><a href="#">One</a></MenuItem>
              <MenuItem className="active"><a>Two</a></MenuItem>
              <MenuItem><a>Three</a></MenuItem>
              <MenuItem><a>Four</a></MenuItem>
            </Menu>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li>
                        <Link to="/LogIn" activeClassName="active" activeStyle={{
                                fontWeight: 'bold'
                            }}>Login</Link>
                    </li>
                    <li>
                        <Link to="/SignIn" activeClassName="active" activeStyle={{
                                fontWeight: 'bold'
                            }}>SignIn</Link>
                    </li>
                </ul>
            </div>
        </div>)
    }
}

export default MainMenu;
