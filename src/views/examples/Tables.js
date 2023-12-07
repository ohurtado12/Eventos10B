import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Input,
  Form,
  FormGroup,
  Label,
  Col,
} from "reactstrap";
import Header from "components/Headers/Header.js";

const Tables = () => {
  const [orders, setOrders] = useState([
    {
      customerName: "Cliente 1",
      candyType: "Chocolate",
      quantity: 5,
      imageUrl: "https://images.vexels.com/media/users/3/240140/isolated/preview/23120c932448eb94f3d6f327dc919164-comida-dulces-7.png",
    },
    {
      customerName: "Cliente 2",
      candyType: "Caramelos",
      quantity: 10,
      imageUrl: "https://1.bp.blogspot.com/-p-wJ6nBvxqU/V_K0RvN5y0I/AAAAAAAAAtg/7ct-AyKQIggDiKTVP-cHK-jNcda2bm4yQCLcB/s1600/calabaza%2Bdulces%2Bhalloween.png",
    },
    {
      customerName: "Cliente 3",
      candyType: "Gomitas",
      quantity: 8,
      imageUrl: "https://png.pngtree.com/png-clipart/20220130/original/pngtree-cute-candy-free-photography-png-image_7240518.png",
    },
  ]);

  const [newOrder, setNewOrder] = useState({
    customerName: "",
    candyType: "",
    quantity: "",
  });

  const handleAddOrder = () => {
    setOrders([...orders, newOrder]);
    setNewOrder({ customerName: "", candyType: "", quantity: "" });
  };

  return (
    <>
      <Header />
      <div className="mt-7">
        <div className="container-fluid">
          <Card>
            <CardHeader>
              <h3 className="mb-0">Gestión de Eventos</h3>
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="customerName">Nombre del Cliente</Label>
                  <Input
                    type="text"
                    id="customerName"
                    placeholder="Ingrese el nombre del cliente"
                    value={newOrder.customerName}
                    onChange={(e) =>
                      setNewOrder({ ...newOrder, customerName: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="candyType">Tipo de Dulce</Label>
                  <Input
                    type="text"
                    id="candyType"
                    placeholder="Ingrese el tipo de dulce"
                    value={newOrder.candyType}
                    onChange={(e) =>
                      setNewOrder({ ...newOrder, candyType: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="quantity">Cantidad</Label>
                  <Input
                    type="number"
                    id="quantity"
                    placeholder="Ingrese la cantidad de dulces"
                    value={newOrder.quantity}
                    onChange={(e) =>
                      setNewOrder({ ...newOrder, quantity: e.target.value })
                    }
                  />
                </FormGroup>
                <Button color="primary" onClick={handleAddOrder}>
                  Agregar Evento
                </Button>
              </Form>
            </CardBody>
          </Card>
          <div className="mt-4">
            <div className="row">
              {orders.map((order, index) => (
                <Col key={index} md="4">
                  <Card key={index} className="bg-dark text-white shadow">
                    <CardHeader className="bg-transparent">
                      <h5 className="text-uppercase mb-0 font-weight-bold text-light">
                        Evento de {order.customerName}
                      </h5>
                    </CardHeader>
                    <CardBody>
                      <div className="d-flex justify-content-center mb-3">
                        <img
                          src={order.imageUrl}
                          alt="Dulce"
                          style={{ maxWidth: "100px" }}
                        />
                      </div>
                      <p className="mb-2">
                        <strong>Tipo de Dulce:</strong> {order.candyType}
                      </p>
                      <p className="mb-2">
                        <strong>Cantidad:</strong> {order.quantity}
                      </p>
                      <p className="mb-0">
                        <strong>Fecha del Evento:</strong> 01/10/2023
                      </p>
                    </CardBody>
                    <CardFooter className="bg-transparent d-flex justify-content-between align-items-center">
                      <div>
                        <Button className="btn-danger">Eliminar Evento</Button>
                      </div>
                      <div>
                        <span
                          className="badge badge-pill badge-warning"
                          style={{ backgroundColor: "#ffc107", color: "black" }}
                        >
                          En Proceso
                        </span>
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tables;
