import React, { useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap";
import { FaInfoCircle } from "react-icons/fa";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Header from "components/Headers/Header.js";

const UserDashboard = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Evento 1", start: "2023-12-15", location: "Dirección 1", guests: 100 },
    { id: 2, title: "Evento 2", start: "2023-12-20", location: "Dirección 2", guests: 50 },
    // ... otros eventos registrados
  ]);

  const [registerModal, setRegisterModal] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDate, setNewEventDate] = useState(null);
  const [newEventLocation, setNewEventLocation] = useState("");
  const [newEventGuests, setNewEventGuests] = useState("");

  const toggleRegisterModal = (info) => {
    setNewEventTitle("");
    setNewEventDate(info.dateStr);
    setNewEventLocation("");
    setNewEventGuests("");
    setRegisterModal(!registerModal);
  };

  const handleEventClick = (info) => {
    // Aquí puedes agregar lógica para manejar el clic en un evento si es necesario
  };

  const handleEventRegistration = () => {
    if (newEventTitle && newEventDate) {
      const newEvent = {
        id: events.length + 1,
        title: newEventTitle,
        start: newEventDate,
        location: newEventLocation,
        guests: newEventGuests,
      };

      setEvents([...events, newEvent]);
      toggleRegisterModal();
    }
  };

  return (
    <>
      <Header />
      <br/><br/><br/>
      <Container className="mt--7" fluid>
        <Row>
          <Col lg="8">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Eventos Registrados</h3>
              </CardHeader>
              <CardBody>
                {events.map((event) => (
                  <Card key={event.id} className="mb-3">
                    <CardBody>
                      <h5>{event.title}</h5>
                      <p>Fecha: {event.start}</p>
                      <p>Dirección: {event.location}</p>
                      <p>Invitados: {event.guests}</p>
                    </CardBody>
                  </Card>
                ))}
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Calendario</h3>
              </CardHeader>
              <CardBody>
                <FullCalendar
                  plugins={[dayGridPlugin, interactionPlugin]}
                  events={events}
                  dateClick={(info) => toggleRegisterModal(info)}
                  eventClick={handleEventClick}
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
              <Label for="eventLocation">Dirección del Evento</Label>
              <Input
                type="text"
                id="eventLocation"
                value={newEventLocation}
                onChange={(e) => setNewEventLocation(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="eventGuests">Total de Invitados</Label>
              <Input
                type="number"
                id="eventGuests"
                value={newEventGuests}
                onChange={(e) => setNewEventGuests(e.target.value)}
              />
            </FormGroup>
            <Button color="primary" onClick={handleEventRegistration}>
              Registrar Evento
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default UserDashboard;
