import { Box, Container, Flex, Heading, SimpleGrid, Wrap } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Peoplecard from './Peoplecard'
import FlimCard from './FlimCard'
import CharFlim from './CharFlim'
import SimpleCard from './SimpleCard'
export default function PlanetsProfile(props) {
  const [data, setdata] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      
        try {
          const response = await fetch(props.url);
          const jsonData = await response.json();
          setdata(jsonData);
        } catch (error) {
          console.error('Error fetching character data:', error);
        }
      
    };

    fetchData();
  }, [props.url]);
 console.log(data)
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
        backgroundImage={'https://lumiere-a.akamaihd.net/v1/images/star-wars-outlaws-gameplay_article-feature_01bb1e67.jpeg?region=0,0,1600,900&width=768'}
        backgroundSize='cover'
           backgroundPosition='center'
           backgroundRepeat='no-repeat'
        >
           
        </Box>
        <Box border={'1px'}   height={'100%'} width={['100%','50%']}>
            <Container mt={'10px'}>
             <Flex direction={'column'}>
                <Heading mb={5}>{data.name}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Rotation Period: {data.rotational_period}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Orbital Period: {data.orbital_period}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Diameter: {data.diameter}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Climate: {data.climate}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Gravity: {data.gravity}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Terrain: {data.terrain}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Surface Water: {data.surface_water}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Population: {data.population}</Heading>
              
                
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
          {data && data.residents ? (
            data.residents.map((data) => (

              <Peoplecard  data={data.url} />
              // <Link key={data.url} href={`/page/profile/${data.url.split('/').filter(Boolean).pop()}`}   passHref>
              
            //  </Link>
            ))
          ) : (
            <Box color={'white'}>Loading...</Box>
          )}
        </Wrap>

     
    
  
  
</Container> 

<CharFlim films={data.films}/>


 
    
    </>
  )
}
