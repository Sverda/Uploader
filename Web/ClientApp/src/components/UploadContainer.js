import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

import '../styles/UploadContainer.css';

export class UploadContainer extends Component {
  static displayName = UploadContainer.name;

  render() {
    return (
      <div id='upload-container'>
        <div className='d-flex'>
          <FontAwesomeIcon className='upload-icon' icon={faUpload} size='lg' color='white' />
        </div>
        <div className='block-container'>
          <h1>Upload file</h1>
          <span>Select file which you may want to put into cloud...</span>
          <div className='block-container'>
            <button type="button" className="btn btn-primary upload-button">Choose file</button>
          </div>
        </div>
      </div>
    );
  }
}
