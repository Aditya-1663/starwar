import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export default function SimpleCard(props) {

  const [data, setdata] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      
        try {
          const response = await fetch(props.data);
          const jsonData = await response.json();
          setdata(jsonData);
        } catch (error) {
          console.error('Error fetching character data:', error);
        }
      
    };

    fetchData();
  }, [props.data]);
  return (
    <Card align='center' size={'sm'} maxW={'250px'} maxH={'100px'} border={'2px'} borderColor={'black'}
     className='Card' bg={'back'}   _hover={{
        border:'2px solid white'}} m={3}
    >
    <CardHeader>
      <Heading size='md'> {data.name}</Heading>
    </CardHeader>
    <CardBody>
      <Text>{data.model}</Text>
    </CardBody>
    
  </Card>
  )
}
