import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Icon,
  SimpleGrid,
  Box,
  Image,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";

const AppAgent = () => {
  const [data, setData] = useState(null);
  const [dataSkin, setDataSkin] = useState(null);
  const [error, setError] = useState("");

  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch(`https://valorant-api.com/v1/bundles/${id}`);
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

  const fetchDataSkin = async () => {
    try {
      const response = await fetch(`https://valorant-api.com/v1/weapons/skins`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      console.log(jsonData);

      setDataSkin(jsonData.data);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchDataSkin();
  }, []);

  return (
    <div className="body">
      {error && <div>Error: {error}</div>}
      {data && (
        <div>
          <div className="header">
            <a href="/bundles">
              <Icon
                as={ChevronLeftIcon}
                width="3em"
                height="3em"
                color={"#FF4655"}
              />
            </a>
            <div>
              <h1>Bundle Details</h1>
            </div>
          </div>
          <Card backgroundColor="transparent" color="#fffff">
            <CardHeader
              display={"flex"}
              flexDirection={"row-reverse"}
              flexWrap={"wrap"}
              justifyContent={"center"}
              alignItems={"center"}
              backgroundImage={data.displayIcon}
              backgroundPosition={"center"}
              height={"50vh"}
              marginBottom={"20px"}
              css={`
                @media (max-width: 480px) {
                  height: 19vh;
                  background-size: cover;
                }
              `}
            ></CardHeader>
            <h1>{data.displayName}</h1>
            <SimpleGrid columns={[1, 3]} spacing={10}>
              {dataSkin &&
                dataSkin
                  .filter((skin) => skin.displayName.includes(data.displayName))
                  .map((item, index) => (
                    <CardBody
                      key={index}
                      backgroundColor="transparent"
                      borderColor="#FF4655"
                      borderWidth="1px"
                      borderStyle="solid"
                      p="4"
                      color="#fffff"
                    >
                      <Box h={"100%"}>
                        <h1>{item.displayName}</h1>
                        <Image src={item.displayIcon} alt="skin" />
                      </Box>
                    </CardBody>
                  ))}
            </SimpleGrid>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AppAgent;
