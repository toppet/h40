import React, { Component } from 'react';
import Navigation from '../../Components/Navigation';

export default class NotFound extends Component {
  render() {
    return (
      <div className="NotFoundPage">
        <Navigation />
        <div className="page-content">
          <h1>404 - Not Found!</h1>
        </div>
      </div>
    )
  }
}
