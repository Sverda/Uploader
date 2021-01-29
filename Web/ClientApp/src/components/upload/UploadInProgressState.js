import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'


class UploadInProgressState extends Component {

    render() {
        return (
            <div id='upload-container'>
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

export default UploadInProgressState;