import React, { useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap";
import { FaInfoCircle } from "react-icons/fa";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import UserHeader from "components/Headers/UserHeader";
import Swal from "sweetalert2";

const UserDashboard = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Concierto en el Parque", start: "2023-12-15", location: "Parque Central", guests: 200, image: "https://via.placeholder.com/300" },
    { id: 2, title: "Exposición de Arte", start: "2023-12-20", location: "Galería de Arte", guests: 75, image: "https://via.placeholder.com/300" },
    { id: 3, title: "Hackatón", start: "2023-12-19", location: "Ceviset", guests: 200, image: "https://via.placeholder.com/300" },
    { id: 4, title: "Integradoras", start: "2023-12-01", location: "Galería de Arte", guests: 75, image: "https://via.placeholder.com/300" },
  ]);

  const [registerModal, setRegisterModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDate, setNewEventDate] = useState(null);
  const [newEventLocation, setNewEventLocation] = useState("");
  const [newEventGuests, setNewEventGuests] = useState("");
  const [newEventImage, setNewEventImage] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [imageEditMode, setImageEditMode] = useState(false);

  const toggleRegisterModal = (info) => {
    setNewEventTitle("");
    setNewEventDate(info.dateStr);
    setNewEventLocation("");
    setNewEventGuests("");
    setNewEventImage(null);
    setRegisterModal(!registerModal);
  };

  const toggleDetailsModal = (event) => {
    setSelectedEvent(event);
    setEditMode(false);
    setImageEditMode(false);
    setDetailsModal(!detailsModal);
  };

  const handleEventClick = (info) => {
    Swal.fire({
      title: '¡Acción realizada exitosamente!',
      icon: "success",
    });
  };

  const handleEventRegistration = () => {
    if (newEventTitle && newEventDate) {
      const newEvent = {
        id: events.length + 1,
        title: newEventTitle,
        start: newEventDate,
        location: newEventLocation,
        guests: newEventGuests,
        image: newEventImage,
      };

      setEvents([...events, newEvent]);
      toggleRegisterModal();
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewEventImage(file);
  };

  const handleEditModeToggle = () => {
    setEditMode(!editMode);
  };

  const handleImageEditModeToggle = () => {
    setImageEditMode(!imageEditMode);
  };

  const handleDetailsModalClose = () => {
    setSelectedEvent(null);
    setDetailsModal(false);
  };

  return (
    <>
      <UserHeader />
      <br /><br /><br />
      <Container className="mt--7" fluid>
        <Row>
          <Col lg="5">
            <Card style={{ border: '5px solid #ccc', borderRadius: '8px', padding: '16px' }}>
              <CardHeader style={{ backgroundColor: "#082554" }}>
                <h3 className="mb-0" style={{ color: "white" }}>Eventos Registrados</h3>
              </CardHeader>
              <CardBody>
                {events.map((event) => (
                  <Card key={event.id} className="mb-3" style={{ maxWidth: "100%", border: '2px solid #ccc', borderRadius: '8px', padding: '16px' }}>
                    <CardBody>
                      <Row>
                        <Col md="8">
                          <h5>{event.title}</h5>
                          <p>Fecha: {event.start}</p>
                          <p>Dirección: {event.location}</p>
                          <p>Invitados: {event.guests}</p>
                          <Button color="primary" onClick={() => toggleDetailsModal(event)}>Ver Detalles</Button>
                        </Col>
                        <Col md="4">
                          {event.image && (
                            <img src={event.image} alt={event.title} style={{ maxWidth: "100%", height: "auto" }} />
                          )}
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                ))}
              </CardBody>
            </Card>
          </Col>
          <Col lg="7">
            <Card style={{ border: '5px solid #ccc', borderRadius: '8px', padding: '16px' }}>
              <CardHeader style={{ backgroundColor: "#082554" }}>
                <h3 className="mb-0" style={{ color: "white" }}>Registrar Evento</h3>
              </CardHeader>
              <CardBody>
                <FullCalendar
                  plugins={[dayGridPlugin, interactionPlugin]}
                  events={events}
                  dateClick={(info) => toggleRegisterModal(info)}
                  eventClick={handleEventClick}
                  height="600px"
                  locale="es"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modal de Registro de Evento */}
      <Modal isOpen={registerModal} toggle={toggleRegisterModal}>
        <ModalHeader toggle={toggleRegisterModal}>Registrar Nuevo Evento</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="eventTitle">Título del Evento</Label>
              <Input
                type="text"
                id="eventTitle"
                value={newEventTitle}
                onChange={(e) => setNewEventTitle(e.target.value)}
                readOnly={!editMode}
              />
            </FormGroup>
            <FormGroup>
              <Label for="eventDate">Fecha del Evento</Label>
              <Input
                type="text"
                id="eventDate"
                value={newEventDate}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <Label for="eventLocation">Dirección del Evento (Google Maps)</Label>
              <Input
                type="text"
                id="eventLocation"
                value={newEventLocation}
                onChange={(e) => setNewEventLocation(e.target.value)}
                readOnly={!editMode}
              />
            </FormGroup>
            <FormGroup>
              <Label for="eventGuests">Total de Invitados</Label>
              <Input
                type="number"
                id="eventGuests"
                value={newEventGuests}
                onChange={(e) => setNewEventGuests(e.target.value)}
                readOnly={!editMode}
              />
            </FormGroup>
            <FormGroup>
              <Label for="eventImage">Imagen del Lugar</Label>
              <Input
                type="file"
                id="eventImage"
                accept="image/*"
                onChange={handleImageUpload}
                readOnly={!imageEditMode || !editMode}
              />
              <Button color="secondary" onClick={handleImageEditModeToggle}>
                {imageEditMode ? "Cancelar Cambio de Imagen" : "Cambiar Imagen"}
              </Button>
            </FormGroup>
            <Button color="primary" onClick={handleEventRegistration}>
              Registrar Evento
            </Button>
            <Button color="secondary" onClick={toggleRegisterModal}>
              Cancelar
            </Button>
          </Form>
        </ModalBody>
      </Modal>

      {/* Modal de Detalles de Evento */}
      <Modal isOpen={detailsModal} toggle={handleDetailsModalClose}>
        <ModalHeader toggle={handleDetailsModalClose}>Detalles del Evento</ModalHeader>
        <ModalBody>
          {selectedEvent && (
            <div>
              <Form>
                <FormGroup>
                  <Label for="eventTitle">Título del Evento</Label>
                  <Input
                    type="text"
                    id="eventTitle"
                    value={selectedEvent.title}
                    onChange={(e) => setNewEventTitle(e.target.value)}
                    readOnly={!editMode}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="eventDate">Fecha del Evento</Label>
                  <Input
                    type="text"
                    id="eventDate"
                    value={selectedEvent.start}
                    disabled
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="eventLocation">Dirección del Evento (Google Maps)</Label>
                  <Input
                    type="text"
                    id="eventLocation"
                    value={selectedEvent.location}
                    onChange={(e) => setNewEventLocation(e.target.value)}
                    readOnly={!editMode}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="eventGuests">Total de Invitados</Label>
                  <Input
                    type="number"
                    id="eventGuests"
                    value={selectedEvent.guests}
                    onChange={(e) => setNewEventGuests(e.target.value)}
                    readOnly={!editMode}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="eventImage">Imagen del Lugar</Label>
                  {selectedEvent.image && (
                    <>
                      <img src={selectedEvent.image} alt={selectedEvent.title} style={{ maxWidth: "100%", height: "auto" }} />
                      <Input
                        type="file"
                        id="eventImage"
                        accept="image/*"
                        onChange={handleImageUpload}
                        readOnly={!imageEditMode || !editMode}
                      />
                      <Button color="secondary" onClick={handleImageEditModeToggle}>
                        {imageEditMode ? "Cancelar Cambio de Imagen" : "Cambiar Imagen"}
                      </Button>
                    </>
                  )}
                </FormGroup>
                <Button color="primary" onClick={handleEditModeToggle}>
                  {editMode ? "Cancelar Edición" : "Habilitar Edición"}
                </Button>
              </Form>
            </div>
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default UserDashboard;
