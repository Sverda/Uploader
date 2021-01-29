import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'


class UploadSuccessState extends Component {

    render() {
        return (
            <div id='upload-container'>
                <div className='d-flex'>
                    <FontAwesomeIcon
                        className='upload-icon'
                        icon={faCheckCircle}
                        size='lg'
                        color='green' />
                </div>
                <div className='block-container'>
                    <h1>Success</h1>
                    <p></p>
                </div>
            </div>
        );
    }
}

export default UploadSuccessState;