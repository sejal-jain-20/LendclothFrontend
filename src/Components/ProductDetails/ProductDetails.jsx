import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiDetail } from "react-icons/bi";
import Carosel from "../utils/Carosel";
import { useDispatch, useSelector } from "react-redux";
import {
  borrowproduct,
  getselectedproduct,
  returnproduct,
} from "../../Redux/actions/productAction";
import { useParams } from "react-router-dom";
import { loadUser } from "../../Redux/actions/userAction";

const ProductDetails = ({ user }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getselectedproduct(id));
  }, [dispatch]);

  const handleBorrowClick = async () => {
    if (user?.lendtoken > 0) {
      if (window.confirm("Are you sure you want to borrow this product?")) {
        await dispatch(borrowproduct(id));
        dispatch(loadUser());
        dispatch(getselectedproduct(id));
      }
    } else {
      window.alert("You don't have enough lend token!");
    }
  };

  const handleReturnClick = async()=>{
    if (window.confirm("Are you sure you want to return the product?"))
    { await dispatch(returnproduct(id))
      dispatch(loadUser());
      dispatch(getselectedproduct(id))
    }
  }

  useEffect(() => {
    if (
      product &&
      product.data &&
      product.data.images &&
      product.data.images.length > 0
    ) {
      setSelectedImage(product.data.images[0].url);
    }
  }, [product]);

  return (
    <Grid templateColumns={{ base: "1fr", md: "1fr  2fr " }} maxw={"100%"}>
      <Box
        display={{ base: "flex", md: "none" }}
        width={"30rem"}
        p={30}
        ml={16}
      >
        <Carousel>
          {product?.data?.images?.map((image, index) => (
            <div key={index}>
              <Image
                src={image?.url}
                alt={`Product Image ${index}`}
                width={"100%"}
              />
            </div>
          ))}
        </Carousel>
        {/* <Carosel arr={product?.data?.images} /> */}
      </Box>

      <Box
        display={{ base: "none", md: "block" }}
        alignItems="start"
        p={5}
        maxw={"100%"}
      >
        <Box display={"flex"}>
          {product?.data?.images.map((image, index) => (
            <Image
              key={index}
              src={image.url}
              alt={`Product Image ${index}`}
              onClick={() => setSelectedImage(image.url)}
              maxW={"100"}
              style={{ cursor: "pointer", margin: "8px" }}
            />
          ))}
        </Box>
        <Image src={selectedImage} alt="Product Image" display={"flex"} />
      </Box>

      <Container border={"2px"} borderColor={"pink"} maxw={"100%"}>
        <VStack align="start" spacing={4} py={3} px={6}>
          <Heading size={"lg"}>{product?.data?.productname}</Heading>
          <Text size={"sm"} color={"grey.200"}>
            {product?.data?.productdescription}
          </Text>
          <Text
            border={"1px"}
            borderColor={"grey"}
            px={2}
            py={0.5}
            opacity={0.8}
          >
            Category | {product?.data?.category}
          </Text>
          <Divider orientation="horizontal" borderColor="grey" opacity={0.4} />
          <HStack justify="space-between">
            <Text fontSize="md" fontWeight="bold">
              Rs.{product?.data?.finalprice}
            </Text>
            <Text textDecoration="line-through" opacity="0.7">
              Rs.{product?.data?.actualprice}
            </Text>
            <Text color="red" fontWeight="bold">
              (
              {Math.round(
                ((product?.data?.actualprice - product?.data?.finalprice) /
                  product?.data?.actualprice) *
                  100
              )}
              % Off)
            </Text>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Text color={"pink.400"} fontWeight={"800"}>
              Size:
            </Text>
            <Text> {product?.data?.size}</Text>
          </HStack>
          {product?.data?.isAvailable ? (
            <Text color={"green"} children="Available Now" />
          ) : (
            <Text color={"red"} children="Out of Stock" />
          )}
          {product?.data?.borrowby === user._id ? (
            <Button my="4" colorScheme="pink" onClick={handleReturnClick} variant={"outline"}>
              Return
            </Button>
          ) : (
            <Button my="4" colorScheme="pink" onClick={handleBorrowClick}>
              Borrow
            </Button>
          )}
     
          <Divider orientation="horizontal" borderColor="grey" opacity={0.4} />
          <HStack>
            <Text size={"sm"} fontWeight={"600"} color={"grey.200"}>
              Product Detail{" "}
            </Text>
            <BiDetail color="#D53F83" />
          </HStack>
          <Text>{product?.data?.productdetail}</Text>
          <Text size={"sm"} fontWeight={"600"} color={"grey.200"}>
            Size & Fit{" "}
          </Text>
          <Text>{product?.data?.sizefit}</Text>
          <Text size={"sm"} fontWeight={"600"} color={"grey.200"}>
            Material & Care{" "}
          </Text>
          <Text>{product?.data?.materialcare}</Text>
        </VStack>
      </Container>
    </Grid>
  );
};

export default ProductDetails;
