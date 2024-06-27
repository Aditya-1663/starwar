import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import { color } from 'framer-motion';
import React from 'react'
import { FaRegHeart ,CiHeart,FaHeart } from "react-icons/fa";
export default function Peoplecard() {
  return (
    <>
    <Card   className='Card' bg={'back'} maxW='300px' minW={'200px'} maxH={'sm'} border={'2px'} borderColor={'black'} _hover={{
        border:'2px solid white'
    }}>
  <CardBody  position={'relative'} >
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
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    
    <Stack mt='4' spacing='3'>
      <Heading size='md'>Name Of charcters</Heading>
      <Heading as='h3' size='sm'>
     Gender :  Male
  </Heading>
      <Heading as='h3' size='sm'>
     Birth Date : 125896 
  </Heading>
    
    </Stack>
  </CardBody>
  {/* <Divider /> */}
  {/* <CardFooter bg={'red'}>
   
  </CardFooter> */}
</Card>
    </>
  )
}
