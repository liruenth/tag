import React, { Component } from 'react';
import {
  Link as RLink,
} from 'react-router-dom';

class Link extends Component {
  render() {
    return (
        <li className="nav-item">
          <RLink style={{color:"white"}} className="nav-link" to={this.props.url}>{this.props.name}</RLink>
        </li>
    );
  }
}

export default Link;