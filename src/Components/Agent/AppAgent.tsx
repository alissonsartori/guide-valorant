import React, { useState, useEffect } from 'react';
import './agent-styles.css';
import { Card, CardHeader, CardBody, Icon, Spinner } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useParams } from 'react-router-dom';
import '../../global-styles.css';
import { DataAgent } from '../../../types';

const AppAgent = () => {
  const [data, setData] = useState<DataAgent | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://valorant-api.com/v1/agents/${id}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className="body-agent">
      <div className="header">
        <a href="/agents">
          <Icon
            as={ChevronLeftIcon}
            width="3em"
            height="3em"
            color={'#FF4655'}
          />
        </a>
        <div className="h1-header">
          <h1>Agent Details</h1>
        </div>
      </div>
      <Card backgroundColor="transparent" p="4" color="#fffff">
        <CardHeader
          display={'flex'}
          flexDirection={'row-reverse'}
          flexWrap={'wrap'}
          justifyContent={'center'}
          alignItems={'center'}
          backgroundImage={`${data.background}`}
          backgroundRepeat={'no-repeat'}
          backgroundPosition={'center'}
          backgroundSize={'23em'}
          css={`
            @media (max-width: 480px) {
              background-size: 13em;
              background-position: top;
            }
          `}
        >
          <img src={data.fullPortrait} alt="portrait" />
          <h1>{`${data.displayName}`}</h1>
          <div className="descrip-container">
            <p>
              <span>Descripton:</span> {`${data.description}`}
            </p>
          </div>
        </CardHeader>
        <CardBody display={'flex'} flexDirection={'column'} gap={'30px'}>
          <div className="role">
            <p>
              <span>Type: </span>
              {data.role.displayName}
            </p>
            <img className="img-role" src={data.role.displayIcon} alt="role" />
          </div>
          {data.abilities.map((ability, index) => (
            <div key={index} className="abilities">
              <p>
                <span>Abilities:</span>
              </p>
              <p>
                <span>Name:</span> {ability.displayName}
              </p>
              <p>
                <span>Description:</span> {ability.description}
              </p>
              <div>
                <img className="img-ability" src={ability.displayIcon} alt="" />
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
};

export default AppAgent;
