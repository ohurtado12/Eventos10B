import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

const UserHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


  return (
    <><nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Container>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu}
      >
        ☰
      </button>
      <div
        className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Mis Eventos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Mi Perfil
            </a>
          </li>
          
        </ul>
      </div>
    </Container>
  </nav>
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
            <Col lg="10" md="10">
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
