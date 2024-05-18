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
import { DataBundles, DataSkins } from "../../../types";

const AppAgent = () => {
  const [data, setData] = useState<DataBundles | null>(null);
  const [dataSkins, setDataSkins] = useState<DataSkins[]>([]);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch(`https://valorant-api.com/v1/bundles/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch bundle data");
      }
      const jsonData = await response.json();
      setData(jsonData.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchDataSkins = async () => {
    try {
      const response = await fetch(`https://valorant-api.com/v1/weapons/skins`);
      if (!response.ok) {
        throw new Error("Failed to fetch skins data");
      }
      const jsonData = await response.json();
      setDataSkins(jsonData.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
    fetchDataSkins();
  }, [id]);

  return (
    <div className="body-grid">
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
              backgroundImage={`${data.displayIcon}`}
              backgroundPosition={"center"}
              height={"50vh"}
              marginBottom={"20px"}
              css={`
                @media (max-width: 480px) {
                  height: 19vh;
                  background-size: cover;
                }
              `}
            />
            <h1>{data.displayName}</h1>
            <SimpleGrid columns={[1, 3]} spacing={10}>
              {dataSkins
                .filter((skin) =>
                  skin.displayName.toLowerCase().includes(data.displayName.toLowerCase())
                )
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
