import React, { Component } from 'react';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div id='centered-container' className='w-100 h-100 d-flex flex-column align-items-center justify-content-center'>
        {this.props.children}
      </div>
    );
  }
}
