import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 

// Create a functional component for the footer
const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" p={4}>
      <Flex justify="space-between" align="center">
        <Text>&copy; 2024 SejalJain</Text>
        <Flex>
          <Link mr={4}>
            <FaFacebook />
          </Link>
          <Link mr={4}>
            <FaTwitter />
          </Link>
          <Link mr={4}>
            <FaInstagram />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;