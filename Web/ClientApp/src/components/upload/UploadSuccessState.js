import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import StateTemplate from './StateTemplate';


class UploadSuccessState extends Component {
    static gradientColor = '0, 255, 0';

    render() {
        return (
            <StateTemplate 
                icon={<FontAwesomeIcon
                        className='upload-icon'
                        icon={faCheckCircle}
                        size='lg'
                        color='green' />}
                header={'Success'}
                text={'Your file was succesfully uploaded. You can copy the link to your clipboard. '}
                buttonsGroup={
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
                }
            />
        );
    }
}

export default UploadSuccessState;