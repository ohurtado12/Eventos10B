import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { FaInfoCircle, FaEdit, FaSave, FaTimes } from "react-icons/fa";
import Header3 from "components/Headers/Header3.js";
import imgProfile from "../../assets/img/avatars/hombre.png";
import imgProfile2 from "../../assets/img/avatars/hombre2.png";
import imgProfile3 from "../../assets/img/avatars/hombre3.png";
import Swal from 'sweetalert2';

const AdminUsers = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [detailsModal, setDetailsModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "",
    imageProfile: "",
  });

  const toggleDetailsModal = () => {
    setEditMode(false);
    setDetailsModal(!detailsModal);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const toggleRegisterModal = () => {
    setRegisterModal(!registerModal);
  };

  const handleSaveChanges = () => {
    // Puedes agregar lógica para guardar los cambios aquí.
    Swal.fire({
      title: '¡Acción realizada exitosamente!',
      icon: "success",
    });
    setDetailsModal(false);
    setEditMode(false);
  };

  const handleCancelChanges = () => {
    // Puedes agregar lógica para cancelar los cambios aquí.
    setEditMode(false);
  };

  const handleRegisterUser = () => {
    // Puedes agregar lógica para registrar un nuevo usuario aquí.
    // Por ahora, simplemente mostramos una alerta con los datos del nuevo usuario.
    Swal.fire({
      title: 'Nuevo Usuario Registrado',
      html: `<strong>Nombre:</strong> ${newUser.name}<br /><strong>Email:</strong> ${newUser.email}<br /><strong>Rol:</strong> ${newUser.role}`,
      icon: "success",
    });
    setNewUser({
      name: "",
      email: "",
      role: "",
      imageProfile: "",
    });
    setRegisterModal(false);
  };

  const usersDataAdmin = [
    { id: 1, name: "Noé Martínez", email: "noemartinez@utez.edu.mx", role: "Administrador", imageProfile: imgProfile },
    { id: 2, name: "Obed Hurtado", email: "obedhurtado@utez.edu.mx", role: "Administrador", imageProfile: imgProfile2 },
    { id: 3, name: "Marcos Ordoñez", email: "marcosordoñez@utez.edu.mx", role: "Administrador", imageProfile: imgProfile3 },
    { id: 4, name: "Mario Rodríguez", email: "mariorodriguez@utez.edu.mx", role: "Cliente", imageProfile: imgProfile },
    { id: 5, name: "Baruc Salgado", email: "barucsalgado@utez.edu.mx", role: "Cliente", imageProfile: imgProfile2 },
    { id: 6, name: "Sergio Cortés", email: "sergiocortes@utez.edu.mx", role: "Cliente", imageProfile: imgProfile3 },
    { id: 7, name: "José Salgado", email: "josesalgado@utez.edu.mx", role: "Cliente", imageProfile: imgProfile },
    { id: 8, name: "Luis Pozo", email: "luispozo@utez.edu.mx", role: "Cliente", imageProfile: imgProfile2 },
    { id: 9, name: "Alan Borjes", email: "alanborjes@utez.edu.mx", role: "Cliente", imageProfile: imgProfile3 },
    { id: 10, name: "Alfonso Bahena", email: "alfonsobahena@utez.edu.mx", role: "Cliente", imageProfile: imgProfile },
  ];

  const handleDetailsClick = (user) => {
    setSelectedUser(user);
    toggleDetailsModal();
  };

  const deleteUser = () => {
    Swal.fire({
      title: '¡Acción realizada exitosamente!',
      icon: "success",
    }).then(() => {
      window.location.reload();
    });
  };


  return (
    <>
      <Header3 />
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <hr />
          <Row>
            <Col className="text-center">
              <Button color="success" onClick={toggleRegisterModal}>
                <FaEdit /> Nuevo Usuario
              </Button>
            </Col>
          </Row>
          <Col xl="12">
            <Card className="shadow">
              <CardBody>
                <Row>
                  {usersDataAdmin.map((user) => (
                    <Col key={user.id} lg="6" md="6" xs="12" className="mb-4">
                      <Card className="card-stats mb-4 mb-lg-0 elevation-3">
                        <CardBody>
                          <Row>
                            <div className="col">
                              <h5 className="text-uppercase mb-0">{user.name}</h5>
                              <p className="mt-3 mb-0 text-sm">
                                <strong>Email:</strong> {user.email}
                                <br />
                                <strong>Rol:</strong> {user.role}
                              </p><br />
                              <Button color="primary" size="sm" onClick={() => handleDetailsClick(user)}>
                                Detalles
                              </Button>
                              <Button color="danger" size="sm" onClick={() => deleteUser()}>
                                Eliminar
                              </Button>
                            </div>
                            <div className="col text-center">
                              <img
                                src={user.imageProfile}
                                alt="Imagen de perfil"
                                className="img-fluid rounded-circle"
                                style={{ width: "100px", height: "100px" }}
                              />
                            </div>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Modal de detalles */}
        <Modal isOpen={detailsModal} toggle={toggleDetailsModal}>
          <ModalHeader toggle={toggleDetailsModal}>
            Detalles de Usuario
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup className="text-center">
                <img
                  src={selectedUser?.imageProfile}
                  alt="Imagen de perfil"
                  className="img-fluid rounded-circle"
                  style={{ width: "100px", height: "100px" }}
                />
              </FormGroup>
              {editMode && (
                <FormGroup>
                  <Label for="newProfileImage">Editar Imagen</Label>
                  <Input type="file" name="newProfileImage" id="newProfileImage" placeholder="URL de la nueva imagen" />
                </FormGroup>
              )}
              <FormGroup>
                <Label for="name">Nombre</Label>
                <Input type="text" name="name" id="name" value={selectedUser ? selectedUser.name : ""} readOnly={!editMode} />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" value={selectedUser ? selectedUser.email : ""} readOnly={!editMode} />
              </FormGroup>
              <FormGroup>
                <Label for="role">Rol</Label>
                <Input type="text" name="role" id="role" value={selectedUser ? selectedUser.role : ""} readOnly={!editMode} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            {!editMode && (
              <Button color="link" onClick={toggleEditMode}>
                <FaEdit /> Editar
              </Button>
            )}
            {editMode && (
              <>
                <Button color="success" onClick={handleSaveChanges}>
                  <FaSave /> Guardar Cambios
                </Button>
                <Button color="danger" onClick={handleCancelChanges}>
                  <FaTimes /> Cancelar
                </Button>
              </>
            )}
            <Button color="secondary" onClick={toggleDetailsModal}>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>

        {/* Modal de registro de usuario */}
        <Modal isOpen={registerModal} toggle={toggleRegisterModal}>
          <ModalHeader toggle={toggleRegisterModal}>Nuevo Usuario</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="newUserName">Nombre</Label>
                <Input
                  type="text"
                  name="newUserName"
                  id="newUserName"
                  placeholder="Ingrese el nombre del nuevo usuario"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label for="newUserEmail">Email</Label>
                <Input
                  type="email"
                  name="newUserEmail"
                  id="newUserEmail"
                  placeholder="Ingrese el email del nuevo usuario"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label for="newUserRole">Rol</Label>
                <Input
                  type="text"
                  name="newUserRole"
                  id="newUserRole"
                  placeholder="Ingrese el rol del nuevo usuario"
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label for="newUserProfileImage">Imagen de Perfil (URL)</Label>
                <Input
                  type="file"
                  name="newUserProfileImage"
                  id="newUserProfileImage"
                  placeholder="Ingrese la URL de la imagen de perfil"
                  value={newUser.imageProfile}
                  onChange={(e) => setNewUser({ ...newUser, imageProfile: e.target.value })}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={handleRegisterUser}>
              <FaSave /> Registrar Usuario
            </Button>
            <Button color="danger" onClick={toggleRegisterModal}>
              <FaTimes /> Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    </>
  );
};

export default AdminUsers;
