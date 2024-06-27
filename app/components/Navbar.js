"use client"

import {
 
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
 
    useDisclosure,
  } from "@chakra-ui/react";
import {FaBars} from "react-icons/fa"
import React from 'react'

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
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
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
