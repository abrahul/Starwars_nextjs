import Navbar from "../../components/Navbar";
import NextLink from "next/link";
import { Box, Link, Heading } from "@chakra-ui/react";
import { getPeopleByID, getStarshipByID } from "../../services/swapi";

const People = ({ person, starships }) => {
  // Extracting last 2 digits
  const result = {};
  starships.forEach((starship) => {
    const url = starship.url;
    const id = url.split("/");
    result[url] = id[id.length - 2];
  });

  return (
    <Box>
      <Navbar />
      <Heading as="h1" size="2xl" mt={8} mb={4}>
        I am {person.name}. My starships are listed below:
      </Heading>
      {starships.map((starship, index) => (
        <Box
          key={index}
          borderRadius="md"
          bg="gray.200"
          p={4}
          mb={4}
          _hover={{ bg: "gray.300" }}
        >
          <NextLink href={`/starship/${result[starship.url]}`} passHref>
            <Link fontSize="lg" color="blue.500">
              {starship.name}
            </Link>
          </NextLink>
        </Box>
      ))}
    </Box>
  );
};

export async function getServerSideProps({ params }) {
  const { data: person } = await getPeopleByID(params.id);
  const starships = await Promise.all(
    person.starships.map((URL) => getStarshipByID(URL))
  );

  return {
    props: {
      person,
      starships,
    },
  };
}

export default People;

