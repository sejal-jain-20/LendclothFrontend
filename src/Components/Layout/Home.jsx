import {
    Box,
    Button,
    Container,
    Flex,
    Grid,
    HStack,
    Heading,
    Image,
    Spacer,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import Carosel from '../utils/Carosel';
  import lend from '../../assets/lend.png';
  import shop from '../../assets/shop.jpg';
  import { Link, useNavigate } from 'react-router-dom';
import CategoryCard from './CategoryCard';

  
  const banner = {
    images: [
      'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/4/53b5ef5d-27f3-4b8e-b048-8a7f0c4931331701692961221-Curtain-Raiser_Shop-Now.jpg',
      'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.jpg',
      'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/3/4335d7ed-73d3-4552-89a2-fc705bfe30691701544808069-Desktop-main-banner-INSIDER--1-.gif',
      'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg',
    ],
  };
  
  const Home = () => {
   
    const navigate = useNavigate();

    return (
      <Stack spacing={4} >
        {/* carosel */}
        <Box display={{ md: 'Block' }}>
          <Carosel arr={banner.images} />
        </Box>
  
        {/* Shop by category */}
        <HStack justifyContent={'center'}>
        <Heading size="lg" > Shop by </Heading>
          <Heading size="lg" color={'pink.400'}>Category</Heading>
        </HStack>
        
        <Stack
        display={'flex'}
        direction={['column','row']}
        flexWrap={"Wrap"}
        justifyContent={"center"}
        gap={5}
        p={6}
        >
        <CategoryCard
          image="https://cdn.shopify.com/s/files/1/0549/1104/1688/files/Dresses_c2e7f50e-4d70-48a8-9d09-e02148fe4402.png?v=1693649128"
          legend="Ethnic Wear"
        />
        <CategoryCard
          image="https://www.marthastewart.com/thmb/vh7SWq_OhhjOecGsEdGDU_yeQ-k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/natalie-jamey-wedding-bridesmaids-0773-6355743-0717-2000-2be9fc4dd95c47778a65cda2e87aa931.jpg"
          legend="Bridesmaid Wear"
        />
         <CategoryCard
          image="https://images.meesho.com/images/products/311034992/dvqts_512.webp"
          legend="Western Wear"
        />
        <CategoryCard
          image="https://i0.wp.com/www.wedress.in/wp-content/uploads/2023/06/VDD1062301.jpg?fit=662%2C906&ssl=1"
          legend="Drama costumes"
        />
          <CategoryCard
          image="https://media1.popsugar-assets.com/files/thumbor/w7i4QYs9C2MF7WX6QLlt6HZ5Gmc=/0x0:1456x1456/fit-in/1584x1584/filters:format_auto():upscale()/2023/06/12/874/n/1922564/dbb82869648779136c7a15.00616962_.jpg"
          legend="Cool Trends Wear"
        />


        {/* Add more Category Cards as needed */}
      </Stack>
  
      
  
        {/* how it is working  */}
        <VStack spacing={6} mt={10} p={4}>
          <HStack>
            <Heading size="lg">Earn money from your </Heading>
            <Heading size="lg" color={'pink.400'}>
              Clothes
            </Heading>
          </HStack>
          <HStack spacing={4} flexDir={{ base: 'column', md: 'row' }}>
            <Box flex="1" maxW={{ base: 'full', md: 'lg' }} >
              <Heading size="md" mb={4}>
                Lend Cloth
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                ad id cupiditate delectus nostrum placeat, dolor laudantium, neque
                iste quibusdam eius vitae sed pariatur nesciunt totam hic
                repellat recusandae eligendi?
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ad
                id cupiditate delectus nostrum placeat, dolor laudantium, neque
                iste quibusdam eius vitae sed pariatur nesciunt totam hic
                repellat recusandae eligendi?
              </Text>
            </Box>
            <Box flex="1" maxW={{ base: 'full', md: 'lg' }}>
              <Image src={lend} filter="drop-shadow(5px 5px 10px rgba(0,0,0,.3))" />
            </Box>
          </HStack>
          <HStack spacing={4} flexDir={{ base: 'column-reverse', md: 'row' }} gap={"8"}>
            <Box flex="1" maxW={{ base: 'full', md: 'lg' }}>
              <Image src={shop} rounded={'lg'} />
            </Box>
            <Box flex="1" maxW={{ base: 'full', md: 'lg' }}>
              <Heading size="md" mb={4}>
                Borrow Cloth
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ad
                id cupiditate delectus nostrum placeat, dolor laudantium, neque
                iste quibusdam eius vitae sed pariatur nesciunt totam hic
                repellat recusandae eligendi?
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ad
                id cupiditate delectus nostrum placeat, dolor laudantium, neque
                iste quibusdam eius vitae sed pariatur nesciunt totam hic
                repellat recusandae eligendi?
              </Text>
            </Box>
          </HStack>
        </VStack>
  
        {/* 3 importance links */}
        <Box>
          <HStack spacing={5} justifyContent={'center'} mb={8}>
            <Link to="/lendcloth">
              <Button colorScheme="pink" variant={'ghost'} size={'lg'}>
                Lend your clothes
              </Button>
            </Link>
            <Link to="/explore">
              <Button colorScheme="pink" variant={'solid'} size={'lg'}>
                Explore Trends
              </Button>
            </Link>
          </HStack>
        </Box>
      </Stack>
    );
  };
  
  export default Home;
  