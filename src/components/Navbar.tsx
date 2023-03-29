import { Flex, Button ,Box} from '@chakra-ui/react';
import Link from 'next/link'

const Navbar = () => {
  return (
    <Flex p="4" bg="gray.800" width="100%">
      
      <Box marginRight={10}>
        <Link href='/'>
                 <Button colorScheme="blue">Home</Button>
          </Link>
      </Box>
      <Box>
        <Link href='/about'>
                <Button colorScheme="blue">About</Button>
         </Link>
      </Box>

    </Flex>
  );
}

export default Navbar;