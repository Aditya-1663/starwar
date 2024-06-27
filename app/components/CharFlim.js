import { Box, Container, Wrap } from '@chakra-ui/react'
import React from 'react'
import FlimCard from './FlimCard'

export default function CharFlim() {
  return (
    <Container h={'100%'} maxW='85%' maxH={'70%'}  size={'lg'} mt={'20px'} bg={'black'}
  
    >
  <Box fontSize={'50px'} borderBottom={'2px'} fontStyle={'oblique'} borderColor={'gray.200'} mb={'15px'}>
  Flims
  </Box>
     
  
  
  
  <Wrap justify='center'>
  <FlimCard/>
  <FlimCard/>
  <FlimCard/>
  <FlimCard/>
  <FlimCard/>
  <FlimCard/>
  <FlimCard/>
  
  
  </Wrap>
  
       
      
    
    
  </Container> 
  )
}
