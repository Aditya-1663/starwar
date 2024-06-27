"use client"

import {
 
  Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    IconButton,
    Input,
 
    VStack,
 
    useDisclosure,
  } from "@chakra-ui/react";
import {FaBars} from "react-icons/fa"
import React from 'react'
import Link from "next/link";

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return (
      <>
        <Drawer 
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={'black'} color={'white'}>
            <DrawerCloseButton />
            <DrawerHeader>Menu Bar</DrawerHeader>
  
            <DrawerBody>
              <VStack  spacing={6} fontSize={18} w={'100%'}>
                <Link href={'#'} ><Box border={'2px'} borderColor={'black'}  as="div" _hover={{border:'2px solid white',
              
                }} p={4} >My Favourite</Box></Link>
                <Link href={'#'} ><Box border={'2px'} borderColor={'black'} as="div" _hover={{border:'2px solid white',
                 
                }} p={4} >All Character</Box></Link>
                <Link href={'#'} ><Box  border={'2px'} borderColor={'black'} as="div" _hover={{border:'2px solid white',
               
                }} p={4} >All Movies</Box></Link>
                <Link href={'#'} ><Box border={'2px'} borderColor={'black'} as="div" _hover={{border:'2px solid white',
                 
                }} p={4} >All Vehicle</Box></Link>
                
              </VStack>
            </DrawerBody>

          
          </DrawerContent>
        </Drawer>
        <Flex
          h="75px"
          bg="black"
          color={'white'}
          justify="space-between"
          align="center"
          px={4}
        >

            <Flex>Star War</Flex>
          
          <IconButton
            
            onClick={onOpen}
            ref={btnRef}
            variant="ghost"
            color="white"
            _hover={{ bg: "main.400" }}
            // fontSize="l"
          >
            <FaBars size={'30px'}/>
            
          </IconButton>
          
        </Flex>
      </>
    );
}
