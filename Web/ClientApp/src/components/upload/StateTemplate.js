import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../../styles/StateTemplates.css';

class StateTemplate extends Component {

    render() {
        return (
            <Container id='template' className='d-flex-col'>
                <Row>
                    <Col className='col-1'></Col>
                    <Col className='col-11'>
                        <h1>{this.props.header}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-1'><div>{this.props.icon}</div></Col>
                    <Col className='col-11'>
                        <p className='align-middle'>{this.props.text}</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-1'></Col>
                    <Col className='col-11'>
                        {this.props.buttonsGroup}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default StateTemplate;