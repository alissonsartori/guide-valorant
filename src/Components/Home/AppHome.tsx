import React from "react";
import { SimpleGrid, Image } from "@chakra-ui/react";
import "./home-styles.css";
import "../../global-styles.css";
import agentsURL from "../../../public/agents.png"
import weaponsURl from "../../../public/weapons.png"
import spraysURL from "../../../public/sprays.png"
import buddiesURL from "../../../public/gunbuddies.png"
import mapsURL from "../../../public/maps.png"
import displayiconURL from "../../../public/displayicon.png"
import cardURL from "../../../public/card.png"



const AppHome = () => {


  return (
    <div className="body-home">
      <SimpleGrid columns={[1, 2]} spacing={10}>
        <a href={`/agents`}>
          <div className="card-container">
            <h1>Agents</h1>
            <Image
              boxSize="300px"
              objectFit="cover"
              src={agentsURL}
              alt="agents"
            />
          </div>
        </a>
        <a href={`/weapons`}>
          <div className="card-container">
            <h1>Weapons</h1>
            <Image
              boxSize="300px"
              objectFit="cover"
              src={weaponsURl}
              alt="weapons"
            />
          </div>
        </a>
        <a href={`/sprays`}>
          <div className="card-container">
            <h1>Sprays</h1>
            <Image
              boxSize="300px"
              objectFit="cover"
              src={spraysURL}
              alt="sprays"
            />
          </div>
        </a>
        <a href={`/buddies`}>
          <div className="card-container">
            <h1>Buddies</h1>
            <Image
              boxSize="300px"
              objectFit="cover"
              src={buddiesURL}
              alt="buddies"
            />
          </div>
        </a>
        <a href={`/maps`}>
          <div className="card-container">
            <h1>Maps</h1>
            <Image
              boxSize="300px"
              objectFit="cover"
              src={mapsURL}
              alt="maps"
            />
          </div>
        </a>
        <a href={`/bundles`}>
          <div className="card-container">
            <h1>Bundles</h1>
            <Image
              boxSize="300px"
              objectFit="cover"
              src={displayiconURL}
              alt="bundles"
            />
          </div>
        </a>
        <a href={`/cards`}>
          <div className="card-container">
            <h1>Cards</h1>
            <Image
              boxSize="300px"
              objectFit="cover"
              src={cardURL}
              alt="bundles"
            />
          </div>
        </a>
      </SimpleGrid>
    </div>
  );
};

export default AppHome;
