import React, { useState, useEffect } from 'react';
import {
  SimpleGrid,
  Card,
  CardBody,
  Icon,
  Box,
  CircularProgress,
} from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import '../../global-styles.css';
import './playercard-styles.css';

// Definição do tipo baseado na resposta da API
interface PlayerCard {
  uuid: string;
  displayName: string;
  isHiddenIfNotOwned: boolean;
  themeUuid: string | null;
  displayIcon: string;
  smallArt: string;
  wideArt: string;
  largeArt: string;
  assetPath: string;
}

const AppPlayerCard = () => {
  const [data, setData] = useState<PlayerCard[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/playercards');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="playercard-body-grid">
      {error && <div className="playercard-error">Error: {error}</div>}
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
        <SimpleGrid
          columns={[1, 3, 5]}
          spacing={10}
          className="playercard-grid"
        >
          {data.map(item => (
            <Card
              key={item.uuid}
              backgroundColor="rgba(30, 30, 30, 0.95)"
              borderColor="#FF4655"
              borderWidth="1px"
              borderStyle="solid"
              p="4"
              className="playercard-card"
            >
              <CardBody
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                gap={'20px'}
              >
                {item.largeArt ? (
                  <img
                    src={item.largeArt}
                    alt={item.displayName}
                    className="playercard-img"
                  />
                ) : (
                  <p>Imagem não disponível</p>
                )}
                <h2 className="playercard-title">{item.displayName}</h2>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      )}
    </div>
  );
};

export default AppPlayerCard;
