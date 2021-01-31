import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <Container>
          <Row className='align-items-center justify-content-center'>
            <Col className='col-sm col-lg-6'>
              {this.props.children}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
