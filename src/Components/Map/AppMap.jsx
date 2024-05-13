import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Icon } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";

const AppMap = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch(`https://valorant-api.com/v1/maps/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();

      setData(jsonData.data);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body">
      {error && <div>Error: {error}</div>}
      {data && (
        <div>
          <div className="header">
            <a href="/maps">
              <Icon
                as={ChevronLeftIcon}
                width="3em"
                height="3em"
                color={"#FF4655"}
              />
            </a>
            <div className="h1-header">
              <h1>Map Details</h1>
            </div>
          </div>
          <Card
            backgroundColor="transparent"
            p="4"
            color="#fffff"
            border={"none"}
          >
            <CardHeader
              display={"flex"}
              flexDirection={"row-reverse"}
              flexWrap={"wrap"}
              justifyContent={"center"}
              alignItems={"center"}
              backgroundImage={data.stylizedBackgroundImage}
              backgroundPosition={"center"}
              height={"50vh"}
              marginBottom={"20px"}
              backgroundSize={'cover'}
            >
              <h1>{data.displayName}</h1>
            </CardHeader>
            <CardBody
              border={"1px solid #FF4655"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-around"}
              css={`
              @media (max-width: 480px) {
                flex-direction: column;
              }
            `}
            >
              <img src={data.displayIcon} alt="" />
              <p>
                <span>Coordinates:</span> {data.coordinates}
              </p>
            </CardBody>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AppMap;
