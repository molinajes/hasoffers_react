import React, { Component } from 'react';

import './App.css';

let cardStyle = {
    backgroundColor: '#fff',
    float: 'left',
    width: '100%',
    display: 'block',
    padding: '15px',
    boxShadow: '0 1px 1px -2px rgba(0,0,0,0.14), 0 1px 1px 0 rgba(0,0,0,0.098), 0 1px 5px 0 rgba(0,0,0,0.084)',
    marginBottom: '20px'
};

let titleStyle = {
    marginTop: '20px',
    marginBottom: '10px',
    padding: '0 .75rem',
    fontWeight: '500',
    lineHeight: '1.1',
    letterSpacing: '-1px'
};

class Card extends Component {

  render() {
    return (
      <div style={cardStyle}>
        <h4 style={titleStyle}>{this.props.title}</h4>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
