import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug } from '@fortawesome/free-solid-svg-icons'

import '../../styles/UploadErrorState.css';

class UploadErrorState extends Component {

    render() {
        return (
            <div id='upload-container'>
                <div className='d-flex'>
                    <FontAwesomeIcon
                        className='upload-icon'
                        icon={faBug}
                        size='lg'
                        color='red' />
                </div>
                <div className='block-container'>
                    <h1>We are sorry!</h1>
                    <p>There was an error and your file could not be uploaded. Would you like to try again?</p>
                    <div className='button-group'>
                        <button
                            className='btn btn-primary'
                        >
                            Retry
                        </button>
                        <button
                            className='btn btn-primary'
                            onClick={this.props.returnState}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UploadErrorState;