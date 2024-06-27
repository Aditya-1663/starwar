import Image from "next/image";
import styles from "./page.module.css";
import { Box, ChakraProvider, Container, Divider, calc } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <ChakraProvider>

      <Navbar/>
      <Divider/>
      <Box h={'90vh'} bg={'black'}></Box>
    
    </ChakraProvider>
  );
}
