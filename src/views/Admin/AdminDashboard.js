import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import { FaInfoCircle } from "react-icons/fa";
import Header from "components/Headers/Header.js";
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';

const BarChartCard = ({ data, keys, indexBy, colors, label }) => {
  return (
    <div className="chart-card">
      <h2>{label}</h2>
      <ResponsiveBar
        data={data}
        keys={keys}
        indexBy={indexBy}
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
        padding={0.3}
        colors={colors}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

const PieChartCard = ({ data, colors, label }) => {
  return (
    <div className="chart-card">
      <h2>{label}</h2>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={colors}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

const AdminDashboard = () => {
  const [asistentesModal, setAsistentesModal] = useState(false);
  const [popularidadModal, setPopularidadModal] = useState(false);

  const toggleAsistentesModal = () => setAsistentesModal(!asistentesModal);
  const togglePopularidadModal = () => setPopularidadModal(!popularidadModal);

  const dataAsistentes = [
    { evento: 'Graduaciones', asistentes: 250 },
    { evento: 'Bodas', asistentes: 400 },
    { evento: 'Fiestas', asistentes: 550 },
    { evento: 'Infantiles', asistentes: 60 },
    { evento: 'XV Años', asistentes: 80 },
    { evento: 'Reunión Familiar', asistentes: 150 },
  ];

  const dataPieChart = [
    { id: 'Graduaciones', label: 'Graduación de UTEZ', value: 250 },
    { id: 'Bodas', label: 'Boda del presidente municipal', value: 400 },
    { id: 'Fiestas', label: 'Fiesta de fin de año', value: 550 },
    { id: 'Infantiles', label: 'Graduación de UTEZ', value: 60 },
    { id: 'XV Años', label: 'Boda del presidente municipal', value: 80 },
    { id: 'Reunión Familiar', label: 'Fiesta de fin de año', value: 150 },
  ];

  const dataPopularidad = [
    { evento: 'Hackathon Local', popularidad: 50 },
    { evento: 'Feria de la Ciencia y Tecnología', popularidad: 140 },
    { evento: 'World Cup', popularidad: 80 },
    { evento: 'Tianguis Artes', popularidad: 70 },
    { evento: 'Exposición', popularidad: 220 },
    { evento: 'Torneo Futbol', popularidad: 300 },
  ];

  const dataPieChart2 = [
    { id: 'Hackathon', label: 'Conferencia de Desarrollo Web', value: 50 },
    { id: 'Feria', label: 'Taller de Diseño UX/UI', value: 140 },
    { id: 'World Cup', label: 'Feria de Innovación Tecnológica', value: 80 },
    { id: 'Tianguis Artes', label: 'Conferencia de Desarrollo Web', value: 70 },
    { id: 'Exposición', label: 'Taller de Diseño UX/UI', value: 220 },
    { id: 'Torneo Futbol', label: 'Feria de Innovación Tecnológica', value: 100 },
  ];

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col xl="12">
            <Card className="user-info-card">
              <CardHeader className="bg-info text-white">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Perfil del Usuario</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <p>Nombre: Nombre del Usuario</p>
                <p>Eventos Registrados: 10</p>
                <p>Eventos Favoritos: 5</p>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xl="6">
            <Card className="chart-card">
              <CardHeader className="bg-success text-white">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Asistentes por Evento</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button color="light" size="sm" onClick={toggleAsistentesModal}>
                      <FaInfoCircle className="mr-2" /> Detalles
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <BarChartCard data={dataAsistentes} keys={['asistentes']} indexBy="evento" colors={{ scheme: 'set3' }} label="Asistentes por Evento" />
              </CardBody>
            </Card>
          </Col>
          <Col xl="6">
            <Card className="chart-card">
              <CardHeader className="bg-warning text-white">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Eventos más Populares</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button color="light" size="sm" onClick={togglePopularidadModal}>
                      <FaInfoCircle className="mr-2" /> Detalles
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <BarChartCard data={dataPopularidad} keys={['popularidad']} indexBy="evento" colors={{ scheme: 'set3' }} label="Eventos más Populares" />
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Modales */}
        <Modal isOpen={asistentesModal} toggle={toggleAsistentesModal}>
          <ModalHeader toggle={toggleAsistentesModal}>Detalles - Asistentes por Evento</ModalHeader>
          <ModalBody>
            <p>A continuación se presenta el detalle de asistentes por evento:</p>
            <ul>
              {dataAsistentes.map((evento) => (
                <li key={evento.evento}>
                  <strong>{evento.evento}:</strong> {evento.asistentes} asistentes
                </li>
              ))}
            </ul>
          </ModalBody>
        </Modal>

        <Modal isOpen={popularidadModal} toggle={togglePopularidadModal}>
          <ModalHeader toggle={togglePopularidadModal}>Detalles - Eventos más Populares</ModalHeader>
          <ModalBody>
            <Col>
              <p>A continuación se presenta el detalle de popularidad por evento:</p>
              <ul>
                {dataPopularidad.map((evento) => (
                  <li key={evento.evento}>
                    <strong>{evento.evento}:</strong> {evento.popularidad} puntos de popularidad
                  </li>
                ))}
              </ul>
            </Col>
            <Col>
              <PieChartCard data={dataPieChart2} colors={{ scheme: 'pastel1' }} label="Eventos más Populares" />
            </Col>
          </ModalBody>
        </Modal>
      </Container>
    </>
  );
};

export default AdminDashboard;
