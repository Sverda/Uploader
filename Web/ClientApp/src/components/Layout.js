import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <Container>
          <Row>
            <Col className='col-sm-0 col-lg-3'></Col>
            <Col className='col-sm-12 col-lg-6'>
              {this.props.children}
            </Col>
            <Col className='col-sm-0 col-lg-3'></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
