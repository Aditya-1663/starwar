import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function SimpleCard() {
  return (
    <Card align='center' size={'sm'} maxW={'250px'} maxH={'100px'} border={'2px'} borderColor={'black'}
     className='Card' bg={'back'}   _hover={{
        border:'2px solid white'}} m={3}
    >
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>dfgdgd</Text>
    </CardBody>
    
  </Card>
  )
}
