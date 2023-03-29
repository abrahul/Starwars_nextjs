import Navbar from '../components/Navbar';

import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (<>
    <Navbar/>
    <Box bg="gray.100" p={8}>
      <Heading mb={4}>About Star Wars</Heading>
      <Text fontSize="xl">
        This is an application to view Star Wars characters.Browse the list of
        characters to discover new favorites.
      </Text>
    </Box>
    </>
  );
};

export default About;