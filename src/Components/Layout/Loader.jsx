import React from 'react';
import { Spinner, VStack } from '@chakra-ui/react';

const Loader = () => {
  return (
  <VStack h="100vh" justifyContent={'center'}>
    <div style={{transform:'scale(4)'}}>
      <Spinner
        thickness="2px"
        speed="0.65s"
        emptyColor="transparent"
        color="pink.400"
        size="xl"
      />
    </div>
  </VStack>
  )
}

export default Loader
