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
import UserHeader from "components/Headers/UserHeader";
import Swal from "sweetalert2";

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    username: "JohnDoe",
    email: "john.doe@example.com",
    password: "********",
  });

  const [changeInfoModal, setChangeInfoModal] = useState(false);
  const [changePasswordModal, setChangePasswordModal] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
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
    // Perform validation and update user information
    setUserInfo({
      ...userInfo,
      username: newUsername || userInfo.username,
      email: newEmail || userInfo.email,
    });

    Swal.fire({
      title: "User information updated successfully!",
      icon: "success",
    }).then(() => {
      toggleChangeInfoModal();
    });
  };

  const handleChangePassword = () => {
    // Perform validation and update password
    setUserInfo({
      ...userInfo,
      password: newPassword,
    });

    Swal.fire({
      title: "Password changed successfully!",
      icon: "success",
    }).then(() => {
      toggleChangePasswordModal();
    });
  };

  return (
    <>
      <UserHeader />
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My Account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      onClick={toggleChangeInfoModal}
                      size="sm"
                    >
                      Change Info
                    </Button>
                    <Button
                      color="primary"
                      onClick={toggleChangePasswordModal}
                      size="sm"
                    >
                      Change Password
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="pl-lg-4">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="input-username">
                      Username
                    </label>
                    <Input
                      className="form-control-alternative"
                      defaultValue={userInfo.username}
                      id="input-username"
                      placeholder="Username"
                      type="text"
                      disabled
                    />
                  </FormGroup>
                  <FormGroup>
                    <label className="form-control-label" htmlFor="input-email">
                      Email address
                    </label>
                    <Input
                      className="form-control-alternative"
                      defaultValue={userInfo.email}
                      id="input-email"
                      placeholder="jesse@example.com"
                      type="email"
                      disabled
                    />
                  </FormGroup>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Change Info Modal */}
      <Modal isOpen={changeInfoModal} toggle={toggleChangeInfoModal}>
        <ModalHeader toggle={toggleChangeInfoModal}>Change User Info</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="newUsername">New Username</Label>
              <Input
                type="text"
                name="newUsername"
                id="newUsername"
                placeholder="Enter new username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="newEmail">New Email</Label>
              <Input
                type="email"
                name="newEmail"
                id="newEmail"
                placeholder="Enter new email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </FormGroup>
            <Button color="primary" onClick={handleChangeInfo}>
              Save Changes
            </Button>{" "}
            <Button color="secondary" onClick={toggleChangeInfoModal}>
              Cancel
            </Button>
          </Form>
        </ModalBody>
      </Modal>

      {/* Change Password Modal */}
      <Modal isOpen={changePasswordModal} toggle={toggleChangePasswordModal}>
        <ModalHeader toggle={toggleChangePasswordModal}>Change Password</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="currentPassword">Current Password</Label>
              <Input
                type="password"
                name="currentPassword"
                id="currentPassword"
                placeholder="Enter current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="newPassword">New Password</Label>
              <Input
                type="password"
                name="newPassword"
                id="newPassword"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </FormGroup>
            <Button color="primary" onClick={handleChangePassword}>
              Save Changes
            </Button>{" "}
            <Button color="secondary" onClick={toggleChangePasswordModal}>
              Cancel
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default UserProfile;
