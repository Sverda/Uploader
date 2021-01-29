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
                    onClick={this.handleChoosenFile}
                />
            </div>
        );
    }

    handleChoosenFile = (e) => {
        let image_as_files = e.target.files[0];
        if (image_as_files !== null) {

            let formData = new FormData();

            axios.post(
                this.custom_file_upload_url,
                formData,
                {
                    headers: {
                        "Content-type": "multipart/form-data",
                    },
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