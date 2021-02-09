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
      />,
      gradientColor: ChooseFileState.gradientColor
    };
  }

  render() {
    return (
      <div
        className='upload-container w-100 h-100 d-flex align-items-center justify-content-center'
        style={
          { background: 'rgb(27,28,43)' },
          { background: `linear-gradient(35deg, rgba(27,28,43,1) 0%, rgba(27,28,43,1) 80%, rgba(${this.state.gradientColor}, 0.5) 100%)` }
        }
      >
        {this.state.current}
      </div>
    );
  }

  setChooseFileState() {
    this.setState({
      current: <ChooseFileState
        successState={this.setUploadSuccessState}
        inProgressState={this.setUploadInProgressState}
        errorState={this.setUploadErrorState}
      />,
      gradientColor: ChooseFileState.gradientColor
    });
  }

  setUploadInProgressState(percentageDone) {
    this.setState({
      current: <UploadInProgressState
        inProgressValue={percentageDone}
        cancelState={this.setChooseFileState}
      />,
      gradientColor: UploadInProgressState.gradientColor
    });
  }

  setUploadErrorState() {
    this.setState({
      current: <UploadErrorState
        returnState={this.setChooseFileState}
      />,
      gradientColor: UploadErrorState.gradientColor
    });
  }

  setUploadSuccessState() {
    this.setState({
      current: <UploadSuccessState
        returnState={this.setChooseFileState}
      />,
      gradientColor: UploadSuccessState.gradientColor
    });
  }
}
