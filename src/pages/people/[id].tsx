import Navbar from "../../components/Navbar"
import NextLink from "next/link";
import { Box, Link } from "@chakra-ui/react";
import { getPeopleByID,getStarshipByID } from "../../services/swapi";



const people = ({ person, starships }) => {

    //extracting last 2 digits
    const result = {};
    starships.forEach((starship) => {
    const url = starship.url;
    const id = url.split("/");
    result[url] = id[id.length-2];
   });

  return (
    <div>
      <Navbar />
        <h1>
            I am {person.name}. My starships are listed below:
        </h1>     
        
          {starships.map(( starship, index) => (
          <Box borderRadius="md" bg="gray.200" key={index} p={4}>
             <NextLink href={`/starship/${result[starship.url]}`} passHref={true}>
              <Link fontSize="lg" color="blue.500">
                {starship.name}
              </Link>
            </NextLink> 
          </Box>
        ))}
        
        
    </div>
  )
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


export default people;
