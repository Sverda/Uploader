import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

class UploadInProgressState extends Component {
    static gradientColor = '0, 0, 255';

    render() {
        return (
            <div>
                <div className='d-flex'>
                    <FontAwesomeIcon
                        className='upload-icon'
                        icon={faArrowCircleUp}
                        size='lg'
                        color='blue' />
                </div>
                <div className='block-container'>
                    <h1>Just a minute...</h1>
                    <p>Your file is uploading right now. Just give us a second to finish your upload. </p>
                    <div className='progress-group'>
                        <div className='d-inline-block w-50 ml-4 mr-4'>
                            <div className="progress">
                                <div className="progress-bar"
                                    role="progressbar"
                                    aria-valuemin="0"
                                    style={{ width: `${this.props.inProgressValue}%` }}
                                    aria-valuenow={this.props.inProgressValue}
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                        <button
                            className='btn btn-primary d-inline-block'
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

export default UploadInProgressState;