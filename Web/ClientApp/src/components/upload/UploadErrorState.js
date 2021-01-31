import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug } from '@fortawesome/free-solid-svg-icons'
import StateTemplate from './StateTemplate';

class UploadErrorState extends Component {
    static gradientColor = '255, 0, 0';

    render() {
        return (
            <StateTemplate 
                icon={<FontAwesomeIcon
                        className='upload-icon'
                        icon={faBug}
                        size='lg'
                        color='red' />}
                header={'We are sorry!'}
                text={'There was an error and your file could not be uploaded. Would you like to try again?'}
                buttonsGroup={
                    <div>
                        <button
                            className='btn btn-primary'
                        >
                            Retry
                        </button>
                        <button
                            className='btn btn-primary ml-3'
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

export default UploadErrorState;