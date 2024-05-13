import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Icon,
  Divider,
  CardFooter,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";
import "./weapon-styles.css";

const AppWeapon = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch(`https://valorant-api.com/v1/weapons/${id}`);
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
            <a href="/weapons">
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
          <Card backgroundColor="transparent" p="4" color="#fffff">
            <CardHeader
              display={"flex"}
              flexWrap={"wrap"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <h1>{data.displayName}</h1>
              <img src={data.displayIcon} alt="" />
            </CardHeader>
            <CardBody
              display={"flex"}
              flexDirection={"column"}
              gap={"30px"}
              border={"1px solid #FF4655"}
            >
              <h1>Shop</h1>
              <div className="weaponStats">
                <div>
                  <p>
                    <span>Cost:</span>
                  </p>
                  <p>
                    <span>Category:</span>
                  </p>
                </div>
                <div>
                  <p>{data.shopData ? data.shopData.cost : "N/A"}</p>
                  <p>{data.shopData ? data.shopData.category : "N/A"}</p>
                </div>
              </div>
              <Divider />
              <h1>Weapon Stats</h1>
              <div className="weaponStats">
                <div>
                  <p>
                    <span>Fire Rate:</span>
                  </p>
                  <p>
                    <span>Magazine Size:</span>
                  </p>
                  <p>
                    <span>Run Speed Multiplier:</span>
                  </p>
                  <p>
                    <span>Equip Time Seconds:</span>
                  </p>
                  <p>
                    <span>Reload Time Seconds:</span>
                  </p>
                  <p>
                    <span>First Bullet Accuracy:</span>
                  </p>
                  <p>
                    <span>Shotgun Pellet Count: </span>
                  </p>
                </div>
                <div>
                  <p>{data.shopData ? data.weaponStats.fireRate : "N/A"}</p>
                  <p>{data.shopData ? data.weaponStats.magazineSize : "N/A"}</p>
                  <p>
                    {data.shopData
                      ? data.weaponStats.runSpeedMultiplier
                      : "N/A"}
                  </p>
                  <p>
                    {data.shopData ? data.weaponStats.equipTimeSeconds : "N/A"}
                  </p>
                  <p>
                    {data.shopData ? data.weaponStats.reloadTimeSeconds : "N/A"}
                  </p>
                  <p>
                    {data.shopData
                      ? data.weaponStats.firstBulletAccuracy
                      : "N/A"}
                  </p>
                  <p>
                    {data.shopData
                      ? data.weaponStats.shotgunPelletCount
                      : "N/A"}
                  </p>
                </div>
              </div>
            </CardBody>
            <CardFooter
              padding={"40px 0px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <h1>
                <span>Skins</span>
              </h1>
              <SimpleGrid columns={[1, 3]} spacing={10}>
                {data.skins
                  .filter((skin) => !skin.displayName.includes("Standard"))
                  .map((skin, index) => (
                    <Box key={index} border={"1px solid #FF4655"} className="weapon-container">
                      {skin.displayIcon ? (
                        <img src={skin.displayIcon} alt="skin" />
                      ) : (
                        <span>Imagem nao encontrada</span>
                      )}
                      <h1>{skin.displayName}</h1>
                    </Box>
                  ))}
              </SimpleGrid>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AppWeapon;
