import Navbar from "../../components/Navbar"
import NextLink from "next/link";
import { Box, Link } from "@chakra-ui/react";
import { getPeopleByUrl,getStarshipByID } from "../../services/swapi";


const starship = ({starship,pilots}) => {
  
    //extracting last 2 digits
    const result = {};
    pilots.forEach((pilot) => {
    const url = pilot.url;
    const id = url.split("/");
    result[url] = id[id.length-2];
   });

   return (
    <div>
      <Navbar />
        <h1>
            This is {starship.name}. Its pilots are listed below:
        </h1>     
        
          {pilots.map(( pilot, index) => (
          <Box borderRadius="md" bg="gray.200" key={index} p={4}>
             <NextLink href={`/people/${result[pilot.url]}`} passHref={true}>
              <Link fontSize="lg" color="blue.500">
                {pilot.name}
              </Link>
            </NextLink> 
          </Box>
        ))}


    </div>
  )
};


export async function getServerSideProps({ params }) {
  const url = [`http://swapi.dev/api/starships/${params.id}`];

  const [starship] = await Promise.all(url.map((id) => getStarshipByID(id)));

  const pilots = await Promise.all(
    starship.pilots.map((URL) => getPeopleByUrl(URL))
  );

  return {
    props: {
      starship,
      pilots,
    },
  };
}




export default starship;

