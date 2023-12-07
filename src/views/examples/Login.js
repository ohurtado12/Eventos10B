import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Validación de que el campo de correo no esté vacío
    if (email.trim() === "") {
      Swal.fire({
        title: '¡Favor de llenar el fomulario!',
        icon: "error",
      })
      return;
    }

    // Simulación de lógica de autenticación
    if (email === "obedhurtado@utez.edu.mx") {
      // Redirige al link de usuario si el correo es correcto
      navigate("/user");
    } else {
      // Redirige al link de admin-dashboard si el correo no es correcto
      navigate("/admin-dashboard");
    }
  };

  return (
    <>
      <div className="header bg-gradient-info py-7 py-lg-8">
        <div className="container h-100">
          <Row className="justify-content-center h-100">
            <Col lg="5" md="7" className="h-100">
              <Card className="bg-secondary shadow border-0 h-100">
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <h3>Iniciar Sesión</h3>
                  </div>
                  <Form role="form" noValidate>
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email"
                          type="email"
                          autoComplete="new-email"
                          onChange={(e) => setEmail(e.target.value)}
                          required // Agrega el atributo required
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Password"
                          type="password"
                          autoComplete="new-password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </InputGroup>
                    </FormGroup>
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckLogin"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckLogin"
                      >
                        <span className="text-muted">Recuérdame</span>
                      </label>
                    </div>
                    <div className="text-center">
                      <Button
                        className="my-4"
                        color="primary"
                        type="button"
                        onClick={handleLogin}
                      >
                        Entrar
                      </Button>
                      {/* En lugar de un enlace, puedes usar Button para el redireccionamiento */}
                      {/* <Button tag={Link} to="/user" className="my-4" color="primary">
                        Mis Eventos
                      </Button> */}
                    </div>
                  </Form>
                </CardBody>
              </Card>
              <Row className="mt-3">
                <Col xs="6">
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <small>¿Olvidaste tu contraseña?</small>
                  </a>
                </Col>
                <Col className="text-right" xs="6">
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <small>Crear Cuenta</small>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Login;
