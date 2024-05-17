import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Card, Col, Row, Input } from "antd";
import Meta from "antd/es/card/Meta";

const Counter = () => {
  type dataLaptop = {
    catalogLaptopId: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
    image: string;
  };

  const [laptops, setLaptops] = useState<dataLaptop[]>([]);

  useEffect(() => {
    fetch(
      "https://localhost:7178/cart?userId=3fa85f64-5717-4562-b3fc-2c963f66afa6"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setLaptops(data);
      });
  }, []);

  return (
    <>
      {laptops.map((item) => (
        <div>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src={`data:image/jpeg;base64,${item.image}`}
                ></img>
              }
              key={item.catalogLaptopId}
            >
              <Meta
                title={item.name}
                description={item.price.toLocaleString()}
              />
            </Card>
          </Col>
        </div>
      ))}
    </>
  );
};

export default Counter;
