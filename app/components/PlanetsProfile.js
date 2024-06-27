import { Box, Container, Flex, Heading, SimpleGrid, Wrap } from '@chakra-ui/react'
import React from 'react'
import Peoplecard from './Peoplecard'
import FlimCard from './FlimCard'
import CharFlim from './CharFlim'
import SimpleCard from './SimpleCard'
export default function PlanetsProfile() {
  return (
    <>
    <Container border={'2px'} size={'lg'} h={'75vh'} maxW='85%' maxH={'80%'} >
      {/* <SimpleGrid column={[1,null,2]}>
        <Box  border={'1px'} height={'100%'}>
            hello
        </Box>
        <Box border={'1px'}  height={'100%'}>
            hello
        </Box>
        
        </SimpleGrid> */}

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
                <Heading mb={5}>Planet Name</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Rotation Period:</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Orbital Period:</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Diameter:</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Climate:</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Gravity:</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Terrain:</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Surface Water:</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Population:</Heading>
              
                
             </Flex>

            </Container>
        </Box>

      </Flex>

    </Container>
    
    <Container h={'100%'} maxW='85%' maxH={'70%'} border={'1px'} size={'lg'} mt={'20px'} bg={'black'}
  
  >
<Box fontSize={'50px'} borderBottom={'2px'} fontStyle={'oblique'} borderColor={'gray.200'} mb={'15px'}>
Residents
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
