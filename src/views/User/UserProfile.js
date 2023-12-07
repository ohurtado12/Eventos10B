// UserProfile.js
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
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import UserHeader2 from "components/Headers/UserHeader2";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import AdminFooter from "../../components/Footers/AdminFooter"

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "John",
    apellidoPaterno: "Doe",
    apellidoMaterno: "Doe",
    edad: 30,
    rol: "Usuario",
    direccion: "123 Calle Principal",
    telefono: "555-1234",
    email: "obedhurtado@utez.edu.mx",
    password: "Utez2021."
  });

  const [changeInfoModal, setChangeInfoModal] = useState(false);
  const [changePasswordModal, setChangePasswordModal] = useState(false);
  const [newUsername, setNewUsername] = useState("obedhurtado@utez.edu.mx");
  const [newEmail, setNewEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("Utez2021.");
  const [newPassword, setNewPassword] = useState("");

  const toggleChangeInfoModal = () => {
    setNewUsername("");
    setNewEmail("");
    setChangeInfoModal(!changeInfoModal);
  };

  const toggleChangePasswordModal = () => {
    setCurrentPassword("");
    setNewPassword("");
    setChangePasswordModal(!changePasswordModal);
  };

  const handleChangeInfo = () => {
    setUserInfo({
      ...userInfo,
      nombre: newUsername || userInfo.nombre,
      email: newEmail || userInfo.email,
    });

    Swal.fire({
      title: "¡Información de usuario actualizada con éxito!",
      icon: "success",
    }).then(() => {
      toggleChangeInfoModal();
    });
  };

  const changePersonalInfo = () => {
    Swal.fire({
      title: "¡Información de usuario actualizada con éxito!",
      icon: "success",
    }).then(() => {
      toggleChangeInfoModal();
    });
  }

  const handleChangePassword = () => {
    setUserInfo({
      ...userInfo,
      password: newPassword,
    });

    Swal.fire({
      title: "¡Contraseña cambiada con éxito!",
      icon: "success",
    }).then(() => {
      toggleChangePasswordModal();
    });
  };

  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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
              <li className="nav-item">
                <Link className="nav-link" to="/user">
                  Mis Eventos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user-profile" className="nav-link">
                  Mi Perfil
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
      <UserHeader2 />
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Mi Cuenta</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      onClick={toggleChangeInfoModal}
                      size="sm"
                    >
                      Cambiar Información
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="pl-lg-4">

                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-nombre">
                          Nombre
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue={userInfo.nombre}
                          id="input-nombre"
                          placeholder="Nombre"
                          type="text"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-apellido-paterno">
                          Apellido Paterno
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue={userInfo.apellidoPaterno}
                          id="input-apellido-paterno"
                          placeholder="Apellido Paterno"
                          type="text"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-apellido-materno">
                          Apellido Materno
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue={userInfo.apellidoMaterno}
                          id="input-apellido-materno"
                          placeholder="Apellido Materno"
                          type="text"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-edad">
                          Edad
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue={userInfo.edad}
                          id="input-edad"
                          placeholder="Edad"
                          type="text"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-rol">
                          Rol
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue={userInfo.rol}
                          id="input-rol"
                          placeholder="Rol"
                          type="text"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-direccion">
                          Dirección
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue={userInfo.direccion}
                          id="input-direccion"
                          placeholder="Dirección"
                          type="text"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-telefono">
                          Teléfono
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue={userInfo.telefono}
                          id="input-telefono"
                          placeholder="Teléfono"
                          type="text"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col className="order-xl-1" xl="4">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Mi Cuenta</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      onClick={toggleChangePasswordModal}
                      size="sm"
                    >
                      Editar
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="pl-lg-4">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="input-nombre">
                      Correo
                    </label>
                    <Input
                      className="form-control-alternative"
                      defaultValue={userInfo.email}
                      id="input-nombre"
                      placeholder="Nombre"
                      type="text"
                      disabled
                    />
                  </FormGroup>
                  <FormGroup>
                    <label className="form-control-label" htmlFor="input-apellido-paterno">
                      Contraseña
                    </label>
                    <Input
                      className="form-control-alternative"
                      defaultValue={userInfo.password}
                      id="input-apellido-paterno"
                      placeholder="Apellido Paterno"
                      type="text"
                      disabled
                    />
                  </FormGroup>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Cambiar Info Modal */}
      <Modal isOpen={changeInfoModal} toggle={toggleChangeInfoModal}>
        <ModalHeader toggle={toggleChangeInfoModal}>Cambiar Información de Usuario</ModalHeader>
        <ModalBody>
          <div className="pl-lg-12">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-nombre">
                Nombre
              </label>
              <Input
                className="form-control-alternative"
                defaultValue={userInfo.nombre}
                id="input-nombre"
                placeholder="Nombre"
                type="text"
                disabled
              />
            </FormGroup>
            <FormGroup>
              <label className="form-control-label" htmlFor="input-apellido-paterno">
                Apellido Paterno
              </label>
              <Input
                className="form-control-alternative"
                defaultValue={userInfo.apellidoPaterno}
                id="input-apellido-paterno"
                placeholder="Apellido Paterno"
                type="text"
                disabled
              />
            </FormGroup>
            <FormGroup>
              <label className="form-control-label" htmlFor="input-apellido-materno">
                Apellido Materno
              </label>
              <Input
                className="form-control-alternative"
                defaultValue={userInfo.apellidoMaterno}
                id="input-apellido-materno"
                placeholder="Apellido Materno"
                type="text"
                disabled
              />
            </FormGroup>
            <FormGroup>
              <label className="form-control-label" htmlFor="input-edad">
                Edad
              </label>
              <Input
                className="form-control-alternative"
                defaultValue={userInfo.edad}
                id="input-edad"
                placeholder="Edad"
                type="text"
                disabled
              />
            </FormGroup>
            <FormGroup>
              <label className="form-control-label" htmlFor="input-rol">
                Rol
              </label>
              <Input
                className="form-control-alternative"
                defaultValue={userInfo.rol}
                id="input-rol"
                placeholder="Rol"
                type="text"
                disabled
              />
            </FormGroup>
            <FormGroup>
              <label className="form-control-label" htmlFor="input-direccion">
                Dirección
              </label>
              <Input
                className="form-control-alternative"
                defaultValue={userInfo.direccion}
                id="input-direccion"
                placeholder="Dirección"
                type="text"
                disabled
              />
            </FormGroup>
            <FormGroup>
              <label className="form-control-label" htmlFor="input-telefono">
                Teléfono
              </label>
              <Input
                className="form-control-alternative"
                defaultValue={userInfo.telefono}
                id="input-telefono"
                placeholder="Teléfono"
                type="text"
                disabled
              />
            </FormGroup>
            <Button color="primary" onClick={changePersonalInfo}>
              Guardar Cambios
            </Button>
          </div>
        </ModalBody>
      </Modal>

      {/* Cambiar Contraseña Modal */}
      <Modal isOpen={changePasswordModal} toggle={toggleChangePasswordModal}>
        <ModalHeader toggle={toggleChangePasswordModal}>Cambiar Contraseña</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="currentPassword">Contraseña Actual</Label>
              <Input
                type="password"
                name="currentPassword"
                id="currentPassword"
                placeholder="Ingrese contraseña actual"
                value={"@Utez2021."}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="newPassword">Nueva Contraseña</Label>
              <Input
                type="password"
                name="newPassword"
                id="newPassword"
                placeholder="Ingrese nueva contraseña"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </FormGroup>
            <Button color="primary" onClick={handleChangePassword}>
              Guardar Cambios
            </Button>{" "}
            <Button color="secondary" onClick={toggleChangePasswordModal}>
              Cancelar
            </Button>
          </Form>
        </ModalBody>
      </Modal>

      <AdminFooter/>
    </>
  );
};

export default UserProfile;
