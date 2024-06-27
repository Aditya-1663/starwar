import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import { color } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react'
import { FaRegHeart ,CiHeart,FaHeart } from "react-icons/fa";
import Datacontext from '../context/Datacontex';
export default function FlimCard(props) {
  const [data, setdata] = useState("");
  const context=useContext(Datacontext)
  const {Filmsimg,CharImg}= context
  useEffect(() => {
    const fetchCharacterData = async () => {
      
        try {
          const response = await fetch(props.data);
          const jsonData = await response.json();
          setdata(jsonData);
        } catch (error) {
          console.error('Error fetching character data:', error);
        }
      
    };

    fetchCharacterData();
  }, [props.data]);

  console.log(data)
  return (
    <>
    <Card   className='Card' bg={'rgba(0, 0, 0, 0.3)'} color={'white'} maxW='250px' minH={'400px'} minW={'200px'}  border={'2px'} borderColor={'black'}  _hover={{
        border:'2px solid white' 
    }}>
  <CardBody  position={'relative'}  m={1} p={1}>
  <IconButton
            
           position={'absolute'}
            variant="ghost"
            color="white"
            _hover={{ bg: "main.400",color:"red" }}
            
        //    top={0}
        //    right={0}
          >
            <FaHeart  size={'30px'}  />
            
          </IconButton>
    <Image 
      // src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      src={`${Filmsimg[data.title]}`}
      borderRadius='lg'
      h={'350px'} w={'350px'} m={0}
    />
    
    <Stack mt='4' spacing='1' >
      <Heading size='s,'>{data==null?"":data.title}</Heading>
      <Heading as='h3' color={'gray'} size='sm'>
      episode no.:  {data==null?"":data.episode_id}
  </Heading>
      <Heading as='h3' color={'gray'} size='sm'>
     Release Date : {data==null?"":data.release_date}
  </Heading>
    
    </Stack>
  </CardBody>

</Card>
    </>
  )
}
