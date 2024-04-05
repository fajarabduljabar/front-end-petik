import React from "react";
import { NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Row, Col } from "reactstrap";

const Products = () => {
  const products = [
    {
      title: "Product 1",
      price: "150000",
    },
    {
      title: "Product 2",
      price: "140000",
    },
    {
      title: "Product 3",
      price: "145000",
    },
    {
      title: "Product 4",
      price: "160000",
    },
    { 
      title: "Product 5",
      price: "200000",
    },
  ];
  return (
    <div>
      <Row>
        {products.map((product,index) => {
          return (
            <Col sm={6} md={4} lg={3} key={index} className="mb-4">
              <NavLink>
              <Card
                color="light"
                style={{
                  width: "20rem",
                }}
              >
                <img alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody className="text-center">
                  <CardTitle tag="h5">{product.title}</CardTitle>
                  <CardText>{product.price}</CardText>
                </CardBody>
              </Card>
              </NavLink>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Products;
