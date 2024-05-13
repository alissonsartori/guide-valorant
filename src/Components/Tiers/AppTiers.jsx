import React, { useState, useEffect } from "react";
import {
  SimpleGrid,
  Card,
  CardBody,
  CardFooter,
  Icon,
  Button,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const AppAgents = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://valorant-api.com/v1/competitivetiers"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();

        setData(jsonData.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="header">
        <a href="/">
          <Icon
            as={ChevronLeftIcon}
            width="3em"
            height="3em"
            color={"#FF4655"}
          />
        </a>
        <div className="h1-header">
          <h1>Tiers</h1>
        </div>
      </div>
      {error && <div>Error: {error}</div>}
      {data.length === 0 ? (
        <Box
          height="50vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap="3rem"
        >
          <CircularProgress isIndeterminate color="#FF4655" />
        </Box>
      ) : (
        <SimpleGrid columns={3} spacing={10}>
          {data.map((data, index) => (
            <Card
              key={index}
              backgroundColor="transparent"
              borderColor="#FF4655"
              borderWidth="1px"
              borderStyle="solid"
              p="4"
              color="#fffff"
            >
              <CardBody
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                gap={"20px"}
              >
                {data.rankTriangleUpIcon ? (
                  <img src={data.rankTriangleUpIcon} alt="" />
                ) : (
                  <p>Imagem não disponível</p>
                )}
                <h1>{data.division}</h1>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      )}
    </div>
  );
};

export default AppAgents;
