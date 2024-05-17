import React, { useState, useEffect } from "react";
import { Card, Col, Row, Input } from "antd";
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
  var jsonData = [
    {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      catalogLaptopId: "e31b129a-ca8a-41c3-8416-7fe3d0070419",
      quantity: 10,
    },
    {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      catalogLaptopId: "a18e7103-d1ef-4258-b82c-6a1b60de8a9c",
      quantity: 10,
    },
  ];
  const PostCart = (id: string) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        catalogLaptopId: id,
        quantity: 10,
      }),
    };
    fetch("https://localhost:7178/cart", requestOptions).then((response) =>
      response.json()
    );
  };

  // empty dependency array means this effect will only run once (like componentDidMount in classes)

  return (
    <>
      <Row gutter={16}>
        {laptops.map((item) => (
          <div>
            <Col span={8}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    style={{ height: 250 }}
                    alt="example"
                    src={`data:image/jpeg;base64,${item.image[0]}`}
                  ></img>
                }
                key={item.id}
                onClick={() => {
                  PostCart(item.id);
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
