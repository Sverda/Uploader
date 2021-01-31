import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import ChooseFileButton from './ChooseFileButton';
import StateTemplate from './StateTemplate';

class ChooseFileState extends Component {
    static gradientColor = '255, 255, 255';

    render() {
        return (
            <StateTemplate
                icon={
                    <FontAwesomeIcon
                        icon={faUpload}
                        size='lg'
                        color='white' />
                }
                header={'Upload file'}
                text={'Select file which you may want to put into cloud...'}
                buttonsGroup={
                    <ChooseFileButton
                        successState={this.props.successState}
                        inProgressState={this.props.inProgressState}
                        errorState={this.props.errorState} />
                }
            />
        );
    }
}

export default ChooseFileState;