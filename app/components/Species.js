import { Box, Container, Flex, Heading, SimpleGrid, Wrap } from '@chakra-ui/react'
import React from 'react'
import Peoplecard from './Peoplecard'
import FlimCard from './FlimCard'
import CharFlim from './CharFlim'
import SimpleCard from './SimpleCard'
export default function Species() {
  return (
    <>
    <Container border={'2px'} size={'lg'} h={'75vh'} maxW='85%' maxH={'80%'} >
     

      <Flex direction={['column','row']} width={'100%'}h={'100%'} border={'1px'}>
        <Box  border={'1px'} height={'100%'} width={['100%','50%']}
        backgroundImage={'https://images.unsplash.com/photo-1547700055-b61cacebece9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0YXIlMjB3YXJzfGVufDB8fDB8fHww'}
        backgroundSize='cover'
           backgroundPosition='center'
           backgroundRepeat='no-repeat'
        >
           
        </Box>
        <Box border={'1px'} borderColor={'red'} height={'100%'} width={['100%','50%']}>
            <Container mt={'10px'}>
             <Flex direction={'column'}>
                <Heading mb={5}>Species name</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Classification:</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Designation:</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Average Height:</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Skin Colors:</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Hair Colors:</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Eye Colors:</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Average Lifespan:</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>HomeWorld:</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Language:</Heading>
              
                
             </Flex>

            </Container>
        </Box>

      </Flex>

    </Container>
    
    <Container h={'100%'} maxW='85%' maxH={'70%'} border={'1px'} size={'lg'} mt={'20px'} bg={'black'}
  
  >
<Box fontSize={'50px'} borderBottom={'2px'} fontStyle={'oblique'} borderColor={'gray.200'} mb={'15px'}>
People
</Box>
   



<Wrap justify='center'>
<Peoplecard/>
<Peoplecard/>
<Peoplecard/>
<Peoplecard/>
<Peoplecard/>
<Peoplecard/>
</Wrap>

     
    
  
  
</Container> 

<CharFlim/>


 
    
    </>
  )
}
