import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class StateTemplate extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col className='col-1'></Col>
                    <Col className='col-11'>
                        <h1>{this.props.header}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-1 d-flex align-items-baseline justify-content-center'>
                        {this.props.icon}
                    </Col>
                    <Col className='col-11'>
                        <p className='p-1'>{this.props.text}</p>
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