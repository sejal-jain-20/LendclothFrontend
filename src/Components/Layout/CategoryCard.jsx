import React from 'react';
import { Box, Heading, Image, Link, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ image, link, legend }) => {
  const navigate = useNavigate();
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      _hover={{ boxShadow: 'xl' }}
      onClick={()=>navigate(`/explore/${legend}`)}
    >
     
      <Image src={image} alt={legend} maxH="200px" width={"100%"} />
      <Box p={4}>
        <Heading size="md" textAlign="center" mb={2}>
          {legend}
        </Heading>
        <Text textAlign="center">{/* Add any additional information here */}</Text>
      </Box>
    </Box>
  );
};

export default CategoryCard;
