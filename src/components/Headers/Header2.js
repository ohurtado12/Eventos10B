import React from "react";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const eventsData = [
  {
    title: "Fiesta de Graduación",
    location: "Jardín Huayacán",
    date: "15 de diciembre de 2023",
    address: "Tezontepec 200, Lomas de Jiutepec, 62560 Jiutepec, Mor.",
    guests: "750 personas",
    confirmationRate: "75%",
    image: "https://hotelhuayacan.com/wp-content/uploads/2021/01/huayacan-1024x683.jpg",
  },
  {
    title: "Boda de Ana y Carlos",
    location: "Jardín Los Laureles",
    date: "22 de mayo de 2023",
    address: "Av. de las Palmas 123, Cuernavaca, Mor.",
    guests: "100 personas",
    confirmationRate: "90%",
    image: "https://cdn0.bodas.com.mx/vendor/8703/3_2/960/jpeg/jll-2-9_5_228703-159122824792253.jpeg",
  },
  {
    title: "Fiesta de Cumpleaños",
    location: "Jardín Las Rosas",
    date: "10 de julio de 2023",
    address: "Calle de las Flores 456, Cuernavaca, Mor.",
    guests: "50 personas",
    confirmationRate: "80%",
    image: "https://hotel-bungalows-las-rosas-cuernavaca.booked.mx/data/Photos/380x250/757/75792/75792713/Hotel-Bungalows-Las-Rosas-Cuernavaca-Facilities.JPEG",
  },
  {
    title: "Aniversario de Bodas",
    location: "Jardín El Paraíso",
    date: "5 de septiembre de 2023",
    address: "Rincón del Cielo 789, Cuernavaca, Mor.",
    guests: "120 personas",
    confirmationRate: "85%",
    image: "https://grupoparaiso.mx/wp-content/uploads/2020/08/Finca-Paraiso-AGO-20-Finca-Parai%CC%81so-79.jpg",
  },
  {
    title: "Evento Corporativo",
    location: "Jardín Empresarial",
    date: "18 de noviembre de 2023",
    address: "Av. de la Innovación 234, Cuernavaca, Mor.",
    guests: "200 personas",
    confirmationRate: "95%",
    image: "https://hotelhuayacan.com/wp-content/uploads/2021/04/ixaya.jpg",
  },
];

const EventCard = ({ event }) => (
  <Card className="event-card">
    <CardBody>
      <Row>
        <Col md="12">
          <h2 className="text-center">Próximos eventos</h2>
        </Col>
      </Row>
      <Row>
        <Col md="8">
          <CardTitle tag="h3" className="event-title">
            Evento: <strong>{event.title}</strong>
          </CardTitle>

          <div className="event-details">
            <ul>
              <li>
                <strong>Lugar:</strong> {event.location}
              </li>
              <li>
                <strong>Fecha del evento:</strong> {event.date}
              </li>
              <li>
                <strong>Dirección del evento:</strong> {event.address}
              </li>
              <li>
                <strong>Total de invitados:</strong> {event.guests}
              </li>
              <li>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-success mr-2">
                    <strong>
                      <i className="fa fa-arrow-up" /> {event.confirmationRate}
                    </strong>
                  </span>{" "}
                  <span className="text-nowrap">Invitados Confirmados</span>
                </p>
              </li>
            </ul>
          </div>
        </Col>

        <Col md="4">
          <div className="event-image">
            <img
              src={event.image}
              alt="Imagen del Evento"
              className="img-fluid"
              style={{ borderRadius: "5%" }}
            />
          </div>
        </Col>
      </Row>
    </CardBody>
  </Card>
);

const Header2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <div className="pb-2 pt-5" style={{ backgroundColor: "#474747" }}>
        <Container fluid>
          <div className="header-body">
            <Row style={{ marginTop: "50px" }}>
              <Col xl="12">
                <Slider {...settings}>
                  {eventsData.map((event, index) => (
                    <EventCard key={index} event={event} />
                  ))}
                </Slider>
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

export default Header2;
