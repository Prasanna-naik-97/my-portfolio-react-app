import React from "react";
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import { Box, Button, Flex, HStack, Heading, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Spacer } from "@chakra-ui/react";
import MobileMenu from "./MobileMenu.js";


export const Header = () => {
  return (
    <Flex backgroundColor={'gray.300'} p={{base: '20px 25px', xl: '20px 50px'}} position="fixed" w="100%" zIndex='1000'>
      <HStack>
        <Heading as='h2'>
          <Image boxSize='50px' objectFit='cover' src='/assets/images/BrandLogo.png' alt='Dan Abramov' />
        </Heading>
        <Box fontWeight={700} color={'blackAlpha.900'}>PRASANNA NAIK</Box>
      </HStack>

      <Spacer/>

      <HStack gap='20px' display={{ base: "none", xl: "flex" }} color={'blackAlpha.900'} fontWeight={'600'}>
        <Link to="home-intro" offset={-100} smooth={true} duration={500} colorScheme='teal' size='md' textDecoration='none' style={{cursor: 'pointer'}}>
          Home
        </Link>
        <Link to="about-me" offset={-100} smooth={true} duration={500} colorScheme='teal' size='md' textDecoration='none' style={{cursor: 'pointer'}}>
          About
        </Link>
        <Link to="experience" offset={-100} smooth={true} duration={500} colorScheme='teal' size='md' textDecoration='none' style={{cursor: 'pointer'}}>
          Experience
        </Link>
        <Button colorScheme='telegram' size='md'>
          <Link to="contactus-form" smooth={true} duration={500} colorScheme='teal' size='md' textDecoration='none' style={{cursor: 'pointer'}}>
            Contact
          </Link>
        </Button>
      </HStack>
      
      <MobileMenu />
    </Flex>
  );
};
