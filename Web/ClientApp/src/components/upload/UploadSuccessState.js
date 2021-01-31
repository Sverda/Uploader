import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'


class UploadSuccessState extends Component {
    static gradientColor = '0, 255, 0';

    render() {
        return (
            <div>
                <div className='d-flex'>
                    <FontAwesomeIcon
                        className='upload-icon'
                        icon={faCheckCircle}
                        size='lg'
                        color='green' />
                </div>
                <div className='block-container'>
                    <h1>Success</h1>
                    <p>Your file was succesfully uploaded. You can copy the link to your clipboard. </p>
                    <div className='button-group'>
                        <button
                            className='btn btn-primary'
                        >
                            Copy Link
                        </button>
                        <button
                            className='btn btn-primary'
                            onClick={this.props.returnState}
                        >
                            Done
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UploadSuccessState;