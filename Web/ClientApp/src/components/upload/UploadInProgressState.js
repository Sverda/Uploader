import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import StateTemplate from './StateTemplate';

class UploadInProgressState extends Component {
    static gradientColor = '0, 0, 255';

    render() {
        return (
            <StateTemplate
                icon={<FontAwesomeIcon
                    className='upload-icon'
                    icon={faArrowCircleUp}
                    size='lg'
                    color='blue' />}
                header={'Just a minute...'}
                text={'Your file is uploading right now. Just give us a second to finish your upload. '}
                buttonsGroup={
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
                }
            />
        );
    }
}

export default UploadInProgressState;