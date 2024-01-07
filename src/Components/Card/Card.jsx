import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link, useLocation, useParams } from "react-router-dom"; // Import Link from React Router
import { Carousel } from "react-responsive-carousel";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getproductcards } from "../../Redux/actions/productAction";
import Carosel from "../utils/Carosel";
import { filterProducts } from "../utils/helper";
import { TiWarning } from "react-icons/ti";

const Card = () => {
  
  const { products, loading } = useSelector((state) => state.product);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState(search.search);
  const [searchProduct, setsearchProduct] = useState([]);
  const dispatch = useDispatch();
  const search = useParams("search")



  useEffect(() => {
    dispatch(getproductcards());
  }, [dispatch]);
   
  let filterproduct = searchQuery && searchProduct ? searchProduct : products;
  useEffect(() => {
    if (searchQuery) {
      setsearchProduct(filterProducts(searchQuery, products));
    }
    filterproduct = searchQuery && searchProduct ? searchProduct : products;
    console.log("search", search);

  }, [searchQuery]);

  useEffect(()=>{
    if(search)
    {
      setSearchQuery(search.search)
    }
  },[search])


  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };
  // const location = useLocation()
  // const search = new URLSearchParams(location.search).get("search")
  // useEffect(()=>{
  //   if(search)
  //   {
  //     setSearchQuery(search)
  //   }
  //   console.log("locations",location)
  // },[location])

  return (
    <>
      {!loading ? (
        <Stack
          display={"flex"}
          direction={["column", "row"]}
          flexWrap={"Wrap"}
          justifyContent={"center"}
          gap={8}
          p={4}
          mt={5}
        >
          {(filterproduct.length > 0) ? (
            <>
              {filterproduct?.map((product, index) => (
                <Link key={product._id} to={`/product/${product._id}`}>
                  <Box
                    borderWidth="1.4px"
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow={hoveredIndex === index ? "md" : "sm"}
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={handleLeave}
                    width={"15rem"}
                    borderBottom={"4px solid pink"}
                    p={2}
                  >
                    <Box h={"16rem"} overflow={"hidden"}>
                      {hoveredIndex === index ? (
                        <Carosel arr={product?.images} />
                      ) : (
                        <Image
                          src={product?.images[0]?.url}
                          alt="Product Image"
                          w={"100%"}
                        />
                      )}
                    </Box>

                    <Box p="4">
                      <VStack spacing="2" align="start">
                        <HStack display={"flex"} justifyContent="space-between">
                          <Box>
                            <Heading
                              as="h3"
                              size="md"
                              overflow="hidden"
                              whiteSpace="nowrap"
                              textOverflow="ellipsis"
                            >
                              {product.productname}
                            </Heading>
                          </Box>
                          <Box>
                            {/* <Text children={"Rating"} fontSize={"xs"}/> */}
                          </Box>
                        </HStack>
                        <Text>{product.description}</Text>
                        <Text>{`Size: ${product.size}`}</Text>
                      </VStack>
                      <HStack justify="space-between" align="center">
                        <Text fontSize="md" fontWeight="bold">
                          Rs.{product.finalprice}
                        </Text>
                        {product.actualprice && product.finalprice && (
                          <>
                            <Text
                              textDecoration="line-through"
                              opacity="0.7"
                              fontSize="sm"
                            >
                              Rs.{product.actualprice}
                            </Text>
                            <Text color="red" fontWeight="bold" fontSize="sm">
                              (
                              {Math.round(
                                ((product.actualprice - product.finalprice) /
                                  product.actualprice) *
                                  100
                              )}
                              % Off)
                            </Text>
                          </>
                        )}
                      </HStack>

                      {product.isAvailable ? (
                        <Text color={"green"} children="Available Now" />
                      ) : (
                        <Text color={"red"} children="Out of Stock" />
                      )}
                    </Box>
                  </Box>
                </Link>
              ))}
            </>
          ) : (
            <>
              <Box
                display={"flex"}
                justifyContent={"center"}
                bgPosition={"center"}
                bgSize={"cover"}
                alignItems={"center"}
                color={"red"}
                flexDirection={"column"}
                height={"55vh"}
              >
                <TiWarning size={"50"}/>
                <Text fontSize={"2xl"}  children="No product available" />
              </Box>
            </>
          )}
        </Stack>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Card;
