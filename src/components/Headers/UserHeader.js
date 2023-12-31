import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

const UserHeader = () => {
  return (
    <>
      <div
        className="header pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: '200px',
          backgroundImage:
            'url(' +
            require('../../assets/img/theme/profile-cover.jpg') +
            ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <span className="mask bg-gradient-default opacity-8" />
        <Container className="d-flex align-items-center" fluid>
          
          <Row>
            <Col lg="12" md="12">
              <h1 className="display-2 text-white">Mis Eventos</h1>
              <p className="text-white mt-0 mb-5">
                Se muestra un listado con tus eventos registrados
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
