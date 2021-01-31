import React, { Component } from 'react';

import '../../styles/StateTemplates.css';

class StateTemplate extends Component {

    render() {
        return (
            <div id='template' className='d-flex-col'>
                <h1>{this.props.header}</h1>
                <div className='d-flex'>
                    {this.props.icon}
                    <p>{this.props.text}</p>
                </div>
                {this.props.buttonsGroup}
            </div>
        );
    }
}

export default StateTemplate;