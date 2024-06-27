import { Box, Container, Flex, Heading, SimpleGrid, Wrap } from '@chakra-ui/react'
import React, { useCallback, useContext, useEffect } from 'react'
import Peoplecard from './Peoplecard'
import FlimCard from './FlimCard'
import CharFlim from './CharFlim'
import SimpleCard from './SimpleCard'
import Datacontext from '../context/Datacontex'
import Link from 'next/link'
export default function Flimprofile(props) {
  const context=useContext(Datacontext)
  const {fprofile,Filmprofile}= context
 
const fetchData = useCallback(async () => {
  await Filmprofile(props.url);
}, [props.url]);

useEffect(() => {
  fetchData();
}, [fetchData]);

 console.log(props.url)


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
                <Heading mb={5}>fprofile.title</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Episode No.: {fprofile.episode_id}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Opening Creawl: {fprofile.opening_crawl}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Director: {fprofile.director}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Producer: {fprofile.producer}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Release Date: {fprofile.release_date}</Heading>
              
                
             </Flex>

            </Container>
        </Box>

      </Flex>

    </Container>
    
    <Container h={'100%'} maxW='85%' maxH={'70%'} border={'1px'} size={'lg'} mt={'20px'} bg={'black'}
  
  >
<Box fontSize={'50px'} borderBottom={'2px'} fontStyle={'oblique'} borderColor={'gray.200'} mb={'15px'}>
Characters in Flim
</Box>
   


<Wrap justify='center'>
          {fprofile && fprofile.characters ? (
            fprofile.characters.map((data) => (

              <Link key={data} href={`/page/profile/${data.split('/').filter(Boolean).pop()}`}   passHref>
                {/* {{data}} */}
              <Peoplecard  data={data} />
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
planets
</Box>

   



<Wrap justify='center'>
          {fprofile && fprofile.planets ? (
            fprofile.planets.map((data) => (

              <Link key={data} href={`/page/planets/${data.split('/').filter(Boolean).pop()}`}   passHref>
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
          {fprofile && fprofile.vehicles ? (
            fprofile.vehicles.map((data) => (

              <Link key={data} href={`/page/vehicle/${data.split('/').filter(Boolean).pop()}`}   passHref>
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
Species
</Box>
   



<Wrap justify='center'>
          {fprofile && fprofile.species ? (
            fprofile.species.map((data) => (

              <Link key={data} href={`/page/species/${data.split('/').filter(Boolean).pop()}`}   passHref>
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
          {fprofile && fprofile.starships ? (
            fprofile.starships.map((data) => (

              <Link key={data} href={`/page/starship/${data.split('/').filter(Boolean).pop()}`}   passHref>
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
