import React from "react";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { FaInfoCircle } from "react-icons/fa";

const Header3 = () => {
  return (
    <>
      <div className="pb-2 pt-5" style={{ backgroundColor: "#6b6f75" }}>
        <Container fluid>
          <div className="header-body">
            <Row style={{ marginTop: "50px" }}>
              <Col xl="12">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <Col md="12" className="text-center">
                        <CardTitle tag="h2" className="text-uppercase mb-0">
                        <strong>Gestión de Usuarios</strong>
                        </CardTitle>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
        <br />
      </div>
      <br /><br /><br />
    </>
  );
};

export default Header3;
