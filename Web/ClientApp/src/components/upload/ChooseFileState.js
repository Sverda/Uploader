import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import ChooseFileButton from './ChooseFileButton';


class ChooseFileState extends Component {
    static gradientColor = '255, 255, 255';

    render() {
        return (
            <div>
                <div className='d-flex'>
                    <FontAwesomeIcon
                        className='upload-icon'
                        icon={faUpload}
                        size='lg'
                        color='white' />
                </div>
                <div className='block-container'>
                    <h1>Upload file</h1>
                    <p>Select file which you may want to put into cloud...</p>
                    <ChooseFileButton
                        successState={this.props.successState}
                        inProgressState={this.props.inProgressState}
                        errorState={this.props.errorState}
                    />
                </div>
            </div>
        );
    }
}

export default ChooseFileState;