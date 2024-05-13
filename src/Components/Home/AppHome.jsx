import { SimpleGrid, Image, Box } from "@chakra-ui/react";

import "./home-styles.css";

const AppHome = () => {
  return (
    <div className="body">
      <SimpleGrid columns={[1, 2]} spacing={10}>
        <a href={`/agents`}>
          <div className="card-container">
            <h1>Agents</h1>
            <Image
              boxSize="300px"
              objectFit="cover"
              src="../public/agents.png"
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
              src="../public/weapons.png"
              alt="weapons"
            />
          </div>
        </a>
        {/* <a href={`/tiers`}>
          <div className="card-container">
            <h1>Tiers</h1>
            <Image
              boxSize="300px"
              objectFit="cover"
              src="../public/ranks.png"
              alt="ranks"
            />
          </div>
        </a> */}
        <a href={`/sprays`}>
          <div className="card-container">
            <h1>Sprays</h1>
            <Image
              boxSize="300px"
              objectFit="cover"
              src="../public/sprays.png"
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
              src="../public/gunbuddies.png"
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
              src="../public/maps.png"
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
              src="../public/displayicon.png"
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
              src="../public/card.png"
              alt="bundles"
            />
          </div>
        </a>
      </SimpleGrid>
    </div>
  );
};

export default AppHome;
