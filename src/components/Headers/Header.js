import React from "react";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { FaInfoCircle } from "react-icons/fa";

const Header = () => {
  return (
    <>
    
      <div className="pb-2 pt-5 "style={{backgroundColor:"#6b6f75"}}>
        <Container fluid>
          <div className="header-body">
            <Row style={{marginTop:"50px"}}>
              <Col xl="6">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h3"
                          className="text-uppercase text-muted mb-0"
                        >
                          Asistentes por Evento
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          450
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                          <FaInfoCircle />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 15%
                      </span>{" "}
                      <span className="text-nowrap">Desde el mes pasado</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>

              <Col xl="6">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h3"
                          className="text-uppercase text-muted mb-0"
                        >
                          Eventos más Populares
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          85
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <FaInfoCircle />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-danger mr-2">
                        <i className="fas fa-arrow-down" /> 5%
                      </span>{" "}
                      <span className="text-nowrap">Desde la semana pasada</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
        <br/>
      </div>
      <br/><br/><br/>
    </>
  );
};

export default Header;
