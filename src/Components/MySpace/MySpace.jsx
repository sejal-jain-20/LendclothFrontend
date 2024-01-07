import { Stack, Box, Button, Image,  HStack } from "@chakra-ui/react";
import myspace from "../../assets/myspace.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserClothes } from "../../Redux/actions/productAction";

const MySpace = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUserClothes());
  }, [dispatch]);

  return (
    <Stack spacing={12}>
      <Image src={myspace} alt="MySpace Image" />

      <HStack justifyContent="space-evenly" mb={12}>
        {/* Overlay for Lend Clothes */}
        <Box
          w="xs"
          h="xs"
          border="1px"
          position="relative"
          overflow="hidden"
        >
          <Image
            src="https://www.shutterstock.com/image-photo/fashion-stylish-luxury-clothes-display-600nw-1360347566.jpg"
            alt="Lend Clothes Image"
            objectFit="cover"
            width="100%"
            height="100%"
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="rgba(0, 0, 0, 0.5)" // Adjust the overlay color and opacity
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
          <Link to="lendtable">
            <Button colorScheme="pink" variant="solid" size="lg">
              Lend Clothes
            </Button>
          </Link>
          </Box>
        </Box>

        {/* Overlay for Borrow Clothes */}
        <Box
          w="xs"
          h="xs"
          border="1px"
          position="relative"
          overflow="hidden"
        >
          <Image
            src="https://img.freepik.com/premium-photo/two-beautiful-smile-friends-choosing-shopping-clothing-retail-store-black-friday_359031-1582.jpg?size=626&ext=jpg"
            alt="Borrow Clothes Image"
            objectFit="cover"
            width="100%"
            height="100%"
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="rgba(0, 0, 0, 0.5)" // Adjust the overlay color and opacity
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
          <Link to="borrowtable">
            <Button colorScheme="pink" variant="solid" size="lg">
              Borrow Clothes
            </Button>
          </Link>
          </Box>
        </Box>
      </HStack>
    </Stack>
  );
};

export default MySpace;
