import { Box, Heading, Link, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { getAllPeoples } from "../services/swapi";
import NextLink from "next/link";

//import Navbar from "../components/Navbar"

export default function PeopleList({ peoples }) {
  return (
    <div>
      <Heading mb={4}>Say Hi to the Star War characters</Heading>
      <SimpleGrid columns={4} spacing={4}>
        {peoples.map(({ name }, idx) => (
          <Box borderRadius="md" bg="gray.200" key={idx} p={4}>
            <p>{name}</p>
            {/* <NextLink href={`/people/${idx + 1}`} passHref={true}>
              <Link fontSize="lg" color="blue.500">
                {name}
              </Link>
            </NextLink> */}
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
}

export async function getServerSideProps() {
  const { data: peoples } = await getAllPeoples();

  return {
    props: {
      peoples,
    },
  };
}
