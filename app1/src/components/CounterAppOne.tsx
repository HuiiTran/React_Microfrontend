import { Text, Button, Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";

const Counter = () => {
  type dataLaptop = {
    id: string;
    storeID: string;
    classify: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    isAvailable: boolean;
    image: [string];
  };

  const [laptops, setLaptops] = useState<dataLaptop[]>([]);

  useEffect(() => {
    fetch("https://localhost:7133/laptops")
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
      <div></div>
      <Row gutter={16}>
        {laptops.map((item) => (
          <div>
            <Col span={8}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src={`data:image/jpeg;base64,${item.image[0]}`}
                  ></img>
                }
                key={item.id}
                onClick={() => {
                  console.log(item.id);
                }}
              >
                <Meta
                  title={item.name}
                  description={item.price.toLocaleString()}
                />
              </Card>
            </Col>
          </div>
        ))}
      </Row>
    </>
  );
};

export default Counter;
