import React, { Component } from 'react';
import ChooseFileState from './ChooseFileState';
import UploadErrorState from './UploadErrorState';
import UploadSuccessState from './UploadSuccessState';
import UploadInProgressState from './UploadInProgressState';

import '../../styles/UploadStateContainer.css';

export class UploadStateContainer extends Component {
  static displayName = UploadStateContainer.name;

  constructor(props) {
    super(props);

    this.setChooseFileState = this.setChooseFileState.bind(this);
    this.setUploadInProgressState = this.setUploadInProgressState.bind(this);
    this.setUploadErrorState = this.setUploadErrorState.bind(this);
    this.setUploadSuccessState = this.setUploadSuccessState.bind(this);

    this.state = {
      current: <ChooseFileState
        successState={this.setUploadSuccessState}
        inProgressState={this.setUploadInProgressState}
        errorState={this.setUploadErrorState}
      />
    };
  }

  render() {
    return this.state.current;
  }

  setChooseFileState() {
    this.setState({
      current: <ChooseFileState
        successState={this.setUploadSuccessState}
        inProgressState={this.setUploadInProgressState}
        errorState={this.setUploadErrorState}
      />
    });
  }

  setUploadInProgressState(percentageDone) {
    this.setState({
      current: <UploadInProgressState
        inProgressValue={percentageDone}
        cancelState={this.setChooseFileState}
      />
    });
  }

  setUploadErrorState() {
    this.setState({
      current: <UploadErrorState
        returnState={this.setChooseFileState}
      />
    });
  }

  setUploadSuccessState() {
    this.setState({
      current: <UploadSuccessState
        returnState={this.setChooseFileState}
      />
    });
  }
}
