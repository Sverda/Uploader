import React, { Component } from 'react';
import axios from "axios";

import '../../styles/ChooseFileButton.css';

class ChooseFileButton extends Component {

    custom_file_upload_url = `https://localhost:5001/api/upload`;

    render() {
        return (
            <div className='block-container'>
                <input
                    type="file"
                    className="btn btn-primary upload-button"
                    onChange={this.handleChoosenFile}
                />
            </div>
        );
    }

    handleChoosenFile = (e) => {
        let image_as_files = e.target.files;
        if (image_as_files !== null) {

            let formData = new FormData();
            formData.append('file', image_as_files[0])

            axios.post(
                this.custom_file_upload_url,
                formData,
                {
                    headers: {
                        "Content-type": "multipart/form-data",
                    },
                    onUploadProgress: function (progressEvent) {
                        var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        console.log(percentCompleted);
                    }
                }
            )
            .then(res => {
                this.props.successState();
            })
            .catch(err => {
                console.log(err);
                this.props.errorState();
            })
        }
    }
}

export default ChooseFileButton;