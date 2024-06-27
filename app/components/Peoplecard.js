import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import { color } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaRegHeart ,CiHeart,FaHeart } from "react-icons/fa";

export default function Peoplecard(props) {
  const [data, setdata] = useState(null);

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
   



  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.includes(props.data)) {
      setIsFavorite(true);
    }
  }, [props.data]);
  const handleFavoriteClick = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      favorites = favorites.filter(url => url !== props.data);
    } else {
      favorites.push(props.data);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };
console.log("start")
console.log(isFavorite)
console.log("end")



  return (
    <>
    <Card   className='Card' bg={'rgba(0, 0, 0, 0.3)'}  color={'white'}maxW='300px' minW={'200px'} maxH={'sm'} border={'2px'} borderColor={'black'} _hover={{
        border:'2px solid white' 
    }}>
  <CardBody  position={'relative'} >
       <IconButton
            onClick={handleFavoriteClick}
           position={'absolute'}
            variant="ghost"
            color={isFavorite ? 'red' : 'white'}
            _hover={{ bg: "main.400",color:"red",zIndex:"2" }}
            
        //    top={0}
        //    right={0}
          >
            <FaHeart  size={'30px'}  />
            
          </IconButton>
          <Link key={props.data} href={`/page/profile/${props.data.split('/').filter(Boolean).pop()}`}   passHref>
         
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    
    <Stack mt='4' spacing='3'>
      <Heading size='md'>{data==null?"":data.name}</Heading>
      <Heading as='h3' size='sm'>
     Gender :  {data==null?"":data.gender}
  </Heading>
      <Heading as='h3' size='sm'>
     Birth Date : {data==null?"":data.birth_year}
  </Heading>
    
    </Stack>
    
</Link>


  </CardBody>
  {/* <Divider /> */}
  {/* <CardFooter bg={'red'}>
   
  </CardFooter> */}
</Card>
    </>
  )
}
