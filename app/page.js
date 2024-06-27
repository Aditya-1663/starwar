import Image from "next/image";
import styles from "./page.module.css";
import { Box, ChakraProvider, Container, Divider, calc } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Allpeople from "./components/Allpeople";
import Charprofile from "./components/Charprofile";
import Flimprofile from "./components/Flimprofile";
import PlanetsProfile from "./components/PlanetsProfile";
import Species from "./components/Species";



export default function Home() {
  return (
    <ChakraProvider>

      <Navbar/>
      {/* <Divider/> */}
      
         <Allpeople/>

         {/* <Charprofile/> */}
         {/* <Flimprofile/> */}
         {/* <PlanetsProfile/> */}
         {/* <Species/> */}

      {/* <Box minH={'80vh'} bg={'green'} color={'white'}>


      </Box> */}
    
    </ChakraProvider>
  );
}
