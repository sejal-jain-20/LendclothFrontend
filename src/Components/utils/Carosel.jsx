import { Box, Image } from '@chakra-ui/react';
import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Carosel = ({arr}) => {
  return (
    <Carousel autoPlay="true" infiniteLoop='true' >
        {arr && arr?.map((image, index) => (
        <Box key={index}>
          <Image
            src={image.url?image.url:image}
            alt={`Product Image ${index + 1}`}
          />
        </Box>
      ))}
    </Carousel>
  )
}

export default Carosel
