import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        
        {/* ss   */}
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Gestión de Clientes de Dulcería</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Ver todo
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Nombre del Cliente</th>
                    <th scope="col">Correo Electrónico</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cliente 1</td>
                    <td>cliente1@dulceria.com</td>
                    <td>(123) 456-7890</td>
                    <td>
                      <Button color="primary" size="sm">
                        Editar
                      </Button>
                      <Button color="danger" size="sm">
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Cliente 2</td>
                    <td>cliente2@dulceria.com</td>
                    <td>(987) 654-3210</td>
                    <td>
                      <Button color="primary" size="sm">
                        Editar
                      </Button>
                      <Button color="danger" size="sm">
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Cliente 3</td>
                    <td>cliente3@dulceria.com</td>
                    <td>(555) 123-4567</td>
                    <td>
                      <Button color="primary" size="sm">
                        Editar
                      </Button>
                      <Button color="danger" size="sm">
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                  {/* Agrega más filas según sea necesario */}
                </tbody>
              </Table>
            </Card>
          </Col>
          
          <Col xl="12">
          <br/>
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">
                      Estadísticas de Clientes de Dulcería
                    </h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Ver detalles
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="mb-3">
                  <h5>Ventas Mensuales</h5>
                  {/* Agrega aquí tu gráfico de ventas mensuales */}
                </div>
                <div className="mb-3">
                  <h5>Clientes más frecuentes</h5>
                  <ul>
                    <li>Cliente A: 10 compras</li>
                    <li>Cliente B: 8 compras</li>
                    <li>Cliente C: 7 compras</li>
                  </ul>
                </div>
                <div>
                  <h5>Productos populares</h5>
                  <ul>
                    <li>Producto X: 50 unidades vendidas</li>
                    <li>Producto Y: 40 unidades vendidas</li>
                    <li>Producto Z: 35 unidades vendidas</li>
                  </ul>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
