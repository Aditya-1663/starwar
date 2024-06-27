import { Box, Container, Flex, Heading, SimpleGrid, Wrap } from '@chakra-ui/react'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import Peoplecard from './Peoplecard'
import FlimCard from './FlimCard'
import CharFlim from './CharFlim'
import SimpleCard from './SimpleCard'
import Datacontext from '../context/Datacontex'
import Link from 'next/link';

export default function Charprofile(props) {
  const context=useContext(Datacontext)
  const {profile,Charprofile}= context
 
const fetchData = useCallback(async () => {
  await Charprofile(props.url);
}, [props.url]);

useEffect(() => {
  fetchData();
}, [fetchData]);

 console.log(props.url)
 console.log(profile)

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
                <Heading mb={5}>{profile.name}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray.300'} mb={3}>height: {profile.height}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray.300'} mb={3}>mass: {profile.mass} </Heading>
                <Heading as={'h2'} size={'sm'} color={'gray.300'} mb={3}>Hair color: {profile.hair_color}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray.300'} mb={3}>Skin color: {profile.skin_color}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray.300'} mb={3}>Eye color: {profile.eye_color}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray.300'} mb={3}>Birth Year: {profile.birth_year}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray.300'} mb={3}>Gender: {profile.gender}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray.300'} mb={3}>HomeWorld:  {profile.homeworld}</Heading>
                
             </Flex>

            </Container>
        </Box>

      </Flex>

    </Container>
    
   <CharFlim films={profile.films}/>



   <Container h={'100%'} maxW='85%' maxH={'70%'}  size={'lg'} mt={'20px'} bg={'black'}
  p={4} mb={6}
  >
<Box fontSize={'50px'} borderBottom={'2px'} fontStyle={'oblique'} borderColor={'gray.200'} mb={'15px'}>
species
</Box>
   

<Wrap justify='center'>
          {profile && profile.species ? (
            profile.species.map((data) => (

              <Link key={data} href={`/page/profile/${data.split('/').filter(Boolean).pop()}`}   passHref>
                {/* {{data}} */}
              <SimpleCard data={data} />
             </Link>
            ))
          ) : (
            <Box color={'white'}>Loading...</Box>
          )}
        </Wrap>
     
    
  
  
</Container> 
<Container h={'100%'} maxW='85%' maxH={'70%'}  size={'lg'} mt={'20px'} bg={'black'}
  p={4} mb={6}
  >
<Box fontSize={'50px'} borderBottom={'2px'} fontStyle={'oblique'} borderColor={'gray.200'} mb={'15px'}>
vehicles
</Box>
   



<Wrap justify='center'>
          {profile && profile.vehicles ? (
            profile.vehicles.map((data) => (

              <Link key={data} href={`/page/profile/${data.split('/').filter(Boolean).pop()}`}   passHref>
                {/* {{data}} */}
              <SimpleCard data={data} />
             </Link>
            ))
          ) : (
            <Box color={'white'}>Loading...</Box>
          )}
        </Wrap>

     
    
  
  
</Container> 
<Container h={'100%'} maxW='85%' maxH={'70%'}  size={'lg'} mt={'20px'} bg={'black'}
  p={4} mb={6}
  >
<Box fontSize={'50px'} borderBottom={'2px'} fontStyle={'oblique'} borderColor={'gray.200'} mb={'15px'}>
starships
</Box>
   



<Wrap justify='center'>
          {profile && profile.starships ? (
            profile.starships.map((data) => (

              <Link key={data} href={`/page/profile/${data.split('/').filter(Boolean).pop()}`}   passHref>
                {/* {{data}} */}
              <SimpleCard data={data} />
             </Link>
            ))
          ) : (
            <Box color={'white'}>Loading...</Box>
          )}
        </Wrap>
     
    
  
  
</Container> 
    
    </>
  )
}
