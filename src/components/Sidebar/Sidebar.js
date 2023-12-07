import React, { useState } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

const Sidebar = (props) => {
  const urlImg = "https://www2.camara.leg.br/atividade-legislativa/participe/saiba-como-participar/imagens/imagem.2015-10-09.9391415699/image";
  const [collapseOpen, setCollapseOpen] = useState();
  const userRole = "admin"; // Reemplazar con la lógica para obtener el rol del usuario

  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  const toggleCollapse = () => {
    setCollapseOpen((data) => !data);
  };

  const closeCollapse = () => {
    setCollapseOpen(false);
  };

  const createLinks = (routes, userRole) => {
    return routes
      .filter((route) => !route.roles || route.roles.includes(userRole))
      .map((prop, key) => {
        return (
          <NavItem key={key}>
            <NavLink style={{ color: "white" }} to={prop.layout + prop.path} tag={NavLinkRRD} onClick={closeCollapse}>
              <i className={prop.icon} /><strong>{prop.name}</strong>
            </NavLink>
          </NavItem>
        );
      });
  };

  const { bgColor, routes, logo } = props;
  let navbarBrandProps;

  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link,
    };
  } else if (logo && logo.outterLink) {
    navbarBrandProps = {
      href: logo.outterLink,
      target: "_blank",
    };
  }

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light"
      expand="md"
      id="sidenav-main"
      style={{ backgroundColor: "#082554" }}
    >
      <Container fluid>
        <button className="navbar-toggler" type="button" onClick={toggleCollapse}>
          <span className="navbar-toggler-icon" />
        </button>
        {logo ? (
          <NavbarBrand className="pt-0" {...navbarBrandProps}>
            <img
              height="150px"
              width="100px"
              className="navbar-brand-img"
              src={urlImg}
              alt="Logo"
            />
          </NavbarBrand>
        ) : null}
        <Nav className="align-items-center d-md-none">
          <UncontrolledDropdown nav>
            <DropdownToggle nav className="nav-link-icon">
              <i className="ni ni-bell-55" />
            </DropdownToggle>
            <DropdownMenu
              aria-labelledby="navbar-default_dropdown_1"
              className="dropdown-menu-arrow"
              right
            >
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav>
            <DropdownToggle nav>
              <Media className="align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img
                    height="250px"
                    width="100px"
                    alt="User Avatar"
                    className="navbar-brand-img"
                    src={urlImg}
                  />
                </span>
              </Media>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem className="noti-title" header tag="div">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-single-02" />
                <span>My profile</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-settings-gear-65" />
                <span>Settings</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-calendar-grid-58" />
                <span>Activity</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-support-16" />
                <span>Support</span>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="ni ni-user-run" />
                <span>Logout</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <Collapse navbar isOpen={collapseOpen}>
          <div className="navbar-collapse-header d-md-none">
            <Row>
              {logo ? (
                <Col className="collapse-brand" xs="6">
                  {logo.innerLink ? (
                    <Link to={logo.innerLink}>
                      <img
                        height="250px"
                        width="100px"
                        alt={logo.imgAlt}
                        className="navbar-brand-img"
                        src={urlImg}
                      />
                    </Link>
                  ) : (
                    <a href={logo.outterLink}>
                      <img
                        height="250px"
                        width="100px"
                        alt={logo.imgAlt}
                        className="navbar-brand-img"
                        src={urlImg}
                      />
                    </a>
                  )}
                </Col>
              ) : null}
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          <Form className="mt-4 mb-3 d-md-none">
            <InputGroup className="input-group-rounded input-group-merge">
              <Input
                aria-label="Search"
                className="form-control-rounded form-control-prepended"
                placeholder="Search"
                type="search"
              />
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <span className="fa fa-search" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Form>
          <Nav navbar>{createLinks(routes, userRole)}</Nav>
          <hr className="my-3" />
        </Collapse>
      </Container>
    </Navbar>
  );
};

Sidebar.defaultProps = {
  routes: [{}],
};

Sidebar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    innerLink: PropTypes.string,
    outterLink: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
  }),
};

export default Sidebar;
