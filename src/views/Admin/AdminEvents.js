import React, { useState } from "react";
import { Button, Card, CardHeader, CardBody, CardTitle, CardText, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, CardFooter } from "reactstrap";
import Swal from 'sweetalert2';
import Header2 from "components/Headers/Header2";

// Datos de ejemplo para eventos
const eventosData = [
  { id: 1, titulo: "Evento A", fecha: "2023-04-15", asistentes: 120, lugar: "Lugar 1" },
  { id: 2, titulo: "Evento B", fecha: "2023-05-20", asistentes: 80, lugar: "Lugar 2" },
  { id: 3, titulo: "Evento C", fecha: "2023-06-10", asistentes: 150, lugar: "Lugar 3" },
  { id: 4, titulo: "Evento D", fecha: "2023-11-05", asistentes: 150, lugar: "Lugar 4" },
  { id: 5, titulo: "Evento E", fecha: "2023-11-30", asistentes: 280, lugar: "Lugar 5" },
  { id: 6, titulo: "Evento F", fecha: "2023-12-12", asistentes: 110, lugar: "Lugar 6" },
  // Agrega más eventos según sea necesario
];

const AdminEvents = () => {
  const [modal, setModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentEvento, setCurrentEvento] = useState({});

  const toggle = () => setModal(!modal);

  const handleEditClick = (evento) => {
    setCurrentEvento(evento);
    setEditMode(true);
    toggle();
  };

  const handleToggleForm = () => {
    setEditMode(!editMode);
  };

  const handleSaveChanges = () => {
    Swal.fire({
      title: '¡Acción realizada exitosamente!',
      icon: "success",
    });
    toggle();
  };

  const deleteEvent = () => {
    Swal.fire({
      title: '¡Acción realizada exitosamente!',
      icon: "success",
    }).then(() => {
      window.location.reload();
    });
  };

  return (
    <>
      <Header2 />
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          {eventosData.map((evento, index) => (
            <Col key={evento.id} lg="4" md="6" xs="12" className="mb-4">
              <Card
                style={{
                  backgroundColor: index % 2 === 0 ? '#104729' : '#082554',
                  borderColor: 'transparent',
                }}
                className="card-stats mb-4 mb-lg-0 elevation-3"
              >
                <CardBody>
                  <Row>
                    <div className="col" style={{ fontWeight: 'bold', color: '#ffffff' }}>
                      <CardTitle className="mb-0" style={{ fontWeight: 'bold' }}>{evento.titulo}</CardTitle>
                      <CardText className="mb-2" >
                        Fecha: {evento.fecha}
                        <br />
                        Asistentes: {evento.asistentes}
                        <br />
                        Lugar: {evento.lugar}
                      </CardText>

                    </div>
                    <div className="col-auto">
                      <br />
                      <img
                        src="https://hotelhuayacan.com/wp-content/uploads/2021/04/carpa-flora.jpg"  // Cambia esto con la URL de tu imagen
                        alt={`Imagen del evento ${evento.titulo}`}
                        className="img-fluid"
                        style={{ width: "100px", height: "100px", borderRadius: "10%" }}  // Ajusta el tamaño según sea necesario
                      />
                    </div>
                  </Row>
                </CardBody>
                <CardFooter style={{
                  backgroundColor: index % 2 === 0 ? '#104729' : '#082554',
                  borderColor: 'transparent',
                }}
                  className="card-stats mb-4 mb-lg-0 elevation-3">
                  <Button size="sm" onClick={() => handleEditClick(evento)} color={index % 2 === 0 ? 'primary' : 'success'}>
                    Detalles
                  </Button> <Button color="danger" size="sm" onClick={() => deleteEvent()}>
                    Eliminar
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal para editar evento */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="bg-primary text-white">
          {editMode ? "Editar Evento" : "Detalles del Evento"}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="titulo">Título</Label>
              <Input
                type="text"
                name="titulo"
                id="titulo"
                placeholder="Título del evento"
                value={currentEvento.titulo || ""}
                disabled={editMode}
              />
            </FormGroup>
            <FormGroup>
              <Label for="fecha">Fecha</Label>
              <Input
                type="text"
                name="fecha"
                id="fecha"
                placeholder="Fecha del evento"
                value={currentEvento.fecha || ""}
                disabled={editMode}
              />
            </FormGroup>
            <FormGroup>
              <Label for="asistentes">Asistentes</Label>
              <Input
                type="text"
                name="asistentes"
                id="asistentes"
                placeholder="Número de asistentes"
                value={currentEvento.asistentes || ""}
                disabled={editMode}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lugar">Lugar</Label>
              <Input
                type="text"
                name="lugar"
                id="lugar"
                placeholder="Lugar del evento"
                value={currentEvento.lugar || ""}
                disabled={editMode}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter className="bg-light">
          {!editMode ? (
            <>

              <Button color="primary" onClick={handleSaveChanges}>
                Guardar Cambios
              </Button>
              <Button color="secondary" onClick={toggle}>
                Cancelar
              </Button>
            </>
          ) : (
            <>
              <Button color="secondary" onClick={toggle}>
                Cerrar
              </Button>
            </>
          )}
          <Button color={!editMode ? 'danger' : 'success'} onClick={handleToggleForm}>
            {!editMode ? "Deshabilitar" : "Habilitar"}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default AdminEvents;
