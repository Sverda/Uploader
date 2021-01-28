import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { UploadContainer } from './components/UploadContainer';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={UploadContainer} />
      </Layout>
    );
  }
}
